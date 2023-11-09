import tkinter as tk
import random
bigger = 0
smaller = 0
rounds = 0
game = tk.Tk()
game.title("guess the number!")
game.geometry("300x250")
number = 0
attempts = 1
guess = None
guess = tk.Entry(game)
def start():
    global number, guess, button, submit, label3, attempts, rounds, label4
    label3.config(text="")
    attempts = 1
    rounds += 1
    number = random.randint(1, 100)
    button.destroy()
    submit.config(height=1, width=6)
    submit.pack()
    button = tk.Button(text="skip round", command=start)
    guess.pack()
    label4.config(text=f"total round(s): {rounds}")
    label4.pack()
    label2.config(text="new round has started")
def done():
    global guess, number, attempts, bigger, smaller
    button.pack()
    try:
        guess_value = int(guess.get())
        if guess_value == number:
            label1.config(text="you win!", font=("arial", 25))
            label3.config(text=f"total attempts: {attempts}")
            label3.pack()
            bigger = 0
            smaller = 0
            button.config(text="play again")
        elif guess_value > number:
            bigger = 0
            smaller += 1
            label1.config(text=f"guess smaller ×{smaller}", font=("arial", 25))
            attempts += 1
        elif guess_value < number:
            smaller = 0
            bigger += 1
            label1.config(text=f"guess bigger ×{bigger}", font=("arial", 25))
            attempts += 1
    except ValueError:
        label1.config(text="error!", font=("arial", 25))
label = tk.Label(game, text="guess the number (1-100)")
label.pack()
label1 = tk.Label(game, text="")
label1.pack()
submit = tk.Button(game, text="submit", command=done)
button = tk.Button(game, text="start!", command=start)
button.pack()
label2 = tk.Label(text="")
label3 = tk.Label(text="")
label4 = tk.Label(text="")
game.mainloop()
