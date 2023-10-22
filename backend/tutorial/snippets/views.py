import os
import sys

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from snippets.models import Snippet
from snippets.serializers import SnippetSerializer
from langchain.chat_models import ChatOpenAI
from langchain.document_loaders import TextLoader, DirectoryLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.llms import OpenAI
from langchain.chains import ConversationalRetrievalChain


os.environ["OPENAI_API_KEY"] = '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'

query = None

loader = DirectoryLoader("data/")
index = VectorstoreIndexCreator().from_loaders([loader])
os.system('cls')

chain = ConversationalRetrievalChain.from_llm(
  llm=ChatOpenAI(model="gpt-3.5-turbo"),
  retriever=index.vectorstore.as_retriever(search_kwargs={"k": 1}),
)

chat_history = []

@api_view(['GET', 'POST'])
def snippet_list(request, format=None):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets = Snippet.objects.all()
        # GET REQUEST ALTERATION [START]
        query = request.GET.get('input')
        if query[0:4] in ['quit', 'q', 'exit']:
          sys.exit()
        query = query + " .be short and concise"
        #result = index.query(query, llm=ChatOpenAI())
        result = chain({"question": query, "chat_history": chat_history, "llm": ChatOpenAI()})
        os.system('cls')

        chat_history.append((query, result['answer']))
        query = None
        print(result['answer'])
        # GET REQUEST ALTERATION [END]
        return Response({'result': result['answer']})

    elif request.method == 'POST':
        serializer = SnippetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def snippet_detail(request, pk, format=None):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        snippet = Snippet.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SnippetSerializer(snippet)
        
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SnippetSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)