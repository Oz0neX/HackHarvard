#pip install pytz
#pip install chatterbot==1.0.4

from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import numpy as np

chatbot = ChatBot('MyChatBot')

aggressive = ["yelling", "yell", "yells", "shout", "shouts", "shouting", "angry", "anger", "hitting", "hit", "hits"]
agitation = ["anxious", "anxiety", "agitated", "agitation", "agitates", "agitate", "nervous","nervousness", "nervously"]


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
    "Remain calm and be encouraging",
])
trainer.train([
    "Nervousness",
    "Use a gentle tone",
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