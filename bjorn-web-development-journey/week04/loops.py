print("FOR LOOP")
for number in range(1, 6):
    print("Number:", number)

print("\nWHILE LOOP")
count = 1

while count <= 5:
    print("Count:", count)
    count = count + 1

print("\nLOOP WITH A CONDITION")
for number in range(1, 11):
    if number % 2 == 0:
        print(number, "is even")
    else:
        print(number, "is odd")

print("\nREPEATING QUESTION")
answer = ""

while answer != "stop":
    answer = input("Type something or type stop: ").lower()
    if answer != "stop":
        print("You typed:", answer)

print("Loop finished.")
