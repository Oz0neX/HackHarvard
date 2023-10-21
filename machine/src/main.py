#Python Chatterbot


#pip install pytz
#pip install chatterbot==1.0.4

from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import numpy as np

chatbot = ChatBot('MyChatBot')

aggressive = ["yelling", "yell", "yells", "shout", "shouts", "shouting", "angry", "anger", "hitting", "hit", "hits"]
agitation = ["anxious", "anxiety", "agitated", "agitation", "agitates", "agitate", "nervous","nervousness", "nervously", "aggravated", "aggravation"]


def tester():
    return "Be supportive and reassuring"
def examine(str = ""):
    for action in aggressive:
        if action in str.lower():
            return "Yelling"
    for action in agitation:
        if action in str.lower():
            return "Nervousness"
    return str

trainer = ListTrainer(chatbot)
trainer.train([
    "Yelling",
    "When dealing with aggresive language or behavior in dementia, it is important to remain calm. You may need to identify yourself as it is possible that the patient does not recognize you. Try to use distraction, encouragement, and reassurance to bring their mind off of aggressive emotions. Try to be flexible if they are being uncooperative and angry.",
])
trainer.train([
    "Nervousness",
    "When dealing with agitation in dementia, it's important to remain calm and use a soothing tone. Offer reassurance, and try redirecting their attention to a comforting activity or topic. Additionally, creating a structured routine can help reduce confusion and anxiety. Lastly, ensure the environment is calm and free from potential stressors. Remember, patience and understanding are key.",
])
trainer.train([
    "Physical",
    tester(),
])

print("Is there a problem?")
while True:
    str = input("Enter a String: ")
    if(str == "End"):
        break
    response = chatbot.get_response(examine(str))
    print(response)

print("Done")
