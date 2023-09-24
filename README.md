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
