# A small choice program using if / elif / else

print("Weekend activity chooser")

weather = input("Is the weather sunny, cloudy or rainy? ").lower()

if weather == "sunny":
    print("You could go outside or go for a walk.")
elif weather == "cloudy":
    print("You could still go outside but take a jacket.")
elif weather == "rainy":
    print("Maybe stay inside and watch a movie.")
else:
    print("I do not recognise that weather.")

energy = int(input("Rate your energy from 1 to 10: "))

if energy > 7:
    print("You have lots of energy.")
elif energy >= 4:
    print("You have a normal amount of energy.")
else:
    print("You should probably take it easy.")
