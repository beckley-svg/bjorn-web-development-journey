print("Simple Python choices")

name = input("What is your name? ")
age = int(input("How old are you? "))

if age >= 18:
    print("Hi " + name + ". You are 18 or older.")
else:
    print("Hi " + name + ". You are younger than 18.")

likes_coding = input("Do you like coding? yes/no: ").lower()

if likes_coding == "yes":
    print("Nice. I am learning it too.")
else:
    print("Maybe it will get more interesting with practice.")
