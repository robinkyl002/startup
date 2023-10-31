# startup

Repository to hold work for CS 260 startup project
Link to [Notes File](/notes.md)

## Startup Specification

### Elevator Pitch

Have you ever gone down a rabbit hole when you tried to search something up on your search engine? We have a different kind of rabbit hole here, one that will give you a few minutes to relax and enjoy a short break. Players try to gather the most carrots they can over the course of several rounds of play. They do this by choosing between three rabbit holes each hole. Watch out though! A wrong choice will get you lost and you will have to start again. Try to get the highest score so you can show your friends how cool you are!

### Design

![Log In Page](/DesignImages/Log%20in%20page.png)
![Home Page](/DesignImages/Home%20Page.png)
![Play Page](/DesignImages/Play%20Page.png)
![Scores Page](/DesignImages/Score%20Page.png)
![Game End Page](/DesignImages/Game%20End%20Page.png)

### Key Features

- Secure login over HTTPS
- Choose from different options on each round of the game
- User can see highest scores achieved
- Randomized points for each selection

### Technology applications

- HTML - Structure of the site. There will be five pages; Log in, Home, Play, a game end screen, and a scores page
- CSS - Styling to make the game easier to play
- JavaScript - Interaction to select enter input info, select which rabbit hole to go down, other interactions and backend endpoint calls
- Web Service - Backend service with endpoints for:
  - login
  - rabbit puns/jokes
- Database - Store users and scores in database
- Login - Register and login users.
- WebSocket - The program casts the three highest scores to all players while they are playing
- React - Web framework

## HTML Deliverables

- HTML - Gave structure on all 5 HTML pages and prepared it for injection of other technologies
- Links - Put in links between pages to help navigate the site
- Styling - Put in classes and IDs for some elements that can be modified with CSS. Added some inline styling to a couple of elements.
- Images - Added rabbit image as an icon and at the top to be paired with the site name.
- Web Service - Created placeholders for backend service with endpoints for:
  - login (on login.html)
  - rabbit puns/jokes (on end.html)
- Database - scores.html will pull data from the database. login.html will pull log in data
- Login - Created structure for login.html that has placeholders for elements used to sign in.
- WebSocket - Placeholder put in for the program to cast the three highest scores to all players while they are playing

## CSS Deliverables

- Header and footer modified with Bootstrap and additional styling to make it look more modern
- Backgrounds resized to fit the screen
- Text colors changed to show up on the background
