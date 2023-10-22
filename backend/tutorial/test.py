import os
import sys

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
while True:
  query = input("Prompt: ")
  if query[0:4] in ['quit', 'q', 'exit']:
    sys.exit()
  query = query + " . Be short and concise"
  #result = index.query(query, llm=ChatOpenAI())
  result = chain({"question": query, "chat_history": chat_history, "llm": ChatOpenAI()})
  os.system('cls')
  print(query)
  #print(result)
  print(result['answer'])

  chat_history.append((query, result['answer']))
  query = None