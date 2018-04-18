# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

I am making a textbook rental app. I will have a database of textbooks with two tables: textbooks and genres. Textbook table will have an id,
title, author, image, genre, price columns. Genres table will have id, name, image columns. I will have a homepage where I describe
the mission of the app with pictures. I will have a textbooks page where I have all the textbooks and their information and clicking on them will link
to the individual page of the textbook. In the individual page, I will have edit, delete, and add to cart buttons. Add to cart will have a form 
with a GET method that brings the information of the textbook to the add to cart page. 

Depending on time, I will include a log in/ registration form. 


## Wireframes

Include images of your wireframes. 
![Image of wireframe]
(https://github.com/xshirl/pokemoncards/blob/master/img/wireframe.jpg)

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

- Creating Landing Page - high priority, low time
- Creating Game Initialization Page - high priority, high time 
    - shuffling cards
    - displaying backs of cards
    - flipping cards - CSS transitions
    - pushing pokemon into player's array
    - create pokemon objects with name, type, HP, moves
- Game play - high priority, high time
    - Show pokemon
    - Fight
    - first pokemon is one with higher speed, if/else compare speeds
    - Pull move from move array from pokemon object
    - Update HP for both pokemon
    - Take turns
    - Change pokemon when pokemon's HP is zero. 
    - See end of game when one player has no more pokemon. 
## Game Components

### Landing Page
What will a player see when they start your game?
They will see a screen with form to fill out their names and submit button. 
### Game Initialization
What will a player see when the game is started? 
Two rows of five cards each and a play button.
### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam
There will be two fight buttons, one for player1 and one for player 2. When
the fight button is pressed, the pokemon makes a move. If the move is super 
effective, the other pokemon loses all of its HP. THe next pokemon comes up.
If the move is normal, half of HP loses. If the move is not effective,
the pokemon loses 1/4 HP. 
### Winning The Game
What does it look like when the game ends, what determines winning or losing?
When all the pokemon for one player is gone, the player loses and the other
wins. The screen shows Player wins. 
### Game Reset
How will the user restart the game once it has been completed.
There will be a replay button. 
## MVP 

Include the full list of features that will be part of your MVP 
- Creating Landing Page - 1 hour
- Game play - 15 hours
    - create pokemon objects with name, type, HP, moves
    - push pokemon that has been clicked on into players' arrays
    - Show fighting pokemon on screen
    - Fight - press fight button
    - first pokemon is one with higher speed, if/else compare speeds
    - Pull move from move array from pokemon object
    - Update HP for both pokemon
    - Take turns - assign true/false, alert
    - Change pokemon when pokemon's HP is zero. 
    - See end of game when one player has no more pokemon.
## POST MVP
- Creating Game Initialization Page - 10 hours 
    - shuffling cards
    - displaying backs of cards 
    - flipping cards - CSS transitions to show pokemon
    - pushing pokemon into player's array
    - displaying pokemon on each team

Include the full list of features that you are considering for POST MVP
## Functional Components
 
function showBoard - show deck of cards - 10 hours
function shuffleArray - shuffle array function - taken from google
function startGame - if/else statements that go through the game moves - 15 hours
function endGame - clears board/player wins alert - 5 hours


Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |
| Total |  | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
