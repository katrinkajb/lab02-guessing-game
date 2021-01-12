# Guess a Number App

## HTML setup
1) Number input
    - Why? So user can add their guesses
2) Button
    - Why? For users to submit their guess and to trigger state changes
3) span for guesses remaining
    - Why? So users know how many more guesses they have
4) Too high/too low/Correct span
    - Why? SO users know where to guess their next number
5) Reset Button (stretch goal)
    - Why? So users can click to start a new game

## Steps
1) Grab DOM elements (with ids)
2) Initialize state 
    - random number: n
    - Guesses remaining: 4
    - no too high/too low text content yet
3) Add event listener to guess button  
    - on click
        1) STATE: remaining guesses decreases by 1 --
        2) Store guess in a variable (Number(someInput.value))
        3) Compare guess with random number
        4) VIEW:
            a) if guess is greater than random number, change text content of Span to say "too high"
            b) if guess is less than random number, change text content of Span to say "too low"
            c) if guess = random number, change text content of Span to say "Correct!" and disable input
        5) VIEW: check if there are any guesses left. If not:
            a) Disable input and add losing message
4) *STRETCH* Add another event listener to reset button
    - on click:
        1) STATE: Reset remaining guesses state to 4
        2) STATE: Create new random number
        3) VIEW: re-enable inputs if they were disabled and fix game text
