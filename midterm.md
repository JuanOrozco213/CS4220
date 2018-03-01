# ROUGH DRAFT - UPDATES and CHANGES will be made prior to Lecutre on Sunday 03/04 
---

## MIDTERM 03/25 - 4:00PM to 6:30PM

#### As a team create a custom node module that uses your selected API.

Students should break up into groups of 4-5 members.  Each group is responsible for selecting a web API.  Using that web API create a custom node module and CLI app to demonstrate interacting with the custom module.

---
### Custom Module Requirements

**package.json** <br/>
The module should have a package.json file that is properly filled out.
  - It should include but not limited to (name, version, author, contributors, dependencies, etc)

**Methods** <br/>
The module should export a method for searching.
  - Given a search criteria it should return an an array that represent the result set. <br/>
    (EX: game title, city, character, actor/actress or artist)
<br/>
The module should export a method for fetching data by id.
  - Given an id of some item it should return an object representing the data requested)
    (EX: game title, city, character, actor/actress or artist)
<br/>
* The user should never be enter a URL or using any other module that the one you have created.

#### CLI Requirements
Create a command line interface similar to the example ones from class.

  - The CLI app should display a help menu by typing: ```node cli.js -h```
<br/>
* The CLI app should not contain the API URL or using any other module (the only exception is inquirer or yargs) than the one you have created.

---

### GRADING

**Preparedness**
  - Team has the correct cables, laptop, etc
  - Team knows who is covering which parts of the presentation
  - Team has code ready and able to run during the presentation

***Timing**
  - Each team member has 2 minutes to present on a portion of the module
  - Going over time loses points.
  - Going WAY under time would also lost points. (example: presenting for 30 secs)

**Code Execution**
  - Code runs during presentation
  - There are no errors
  - Code covers exactly what was detailed above

**Q&A**
  - Team is able to answer questions from class or professors

---
### Example APIs <br/> 
(Limit of 2 teams per API)

TV Maze
- https://www.tvmaze.com/api

The Movie Database API
- https://www.themoviedb.org/documentation/api

Spotify
- https://developer.spotify.com/web-api/

Musikki API
- https://music-api.musikki.com/reference

Star Wars API
- https://swapi.co/documentation

Game of Thrones API
- https://anapioficeandfire.com/Documentation

Marvel
- https://developer.marvel.com/documentation/getting_started

Comic Vine
- https://comicvine.gamespot.com/api/

Internet Gaming DB
- https://igdb.github.io/api/

GiantBomb (Video Game API)
- https://www.giantbomb.com/api/documentation

MetaWeather API
- https://www.metaweather.com/api/

Github
- https://developer.github.com/v3/

Goodreads API
- https://www.goodreads.com/api

Zomato (Resturant API)
- https://developers.zomato.com/documentation#/

Other APIs
- https://github.com/toddmotto/public-apis



