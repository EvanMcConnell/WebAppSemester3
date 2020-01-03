# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Evan McConnell

## Overview.

A web based application which can be used to manage a shopping list of food items.

. . . . . List of user features  . . . .

- Adding items to the list based on input from a form.
- Deleting items from the list.
- Info pages about the different food types
- Marking items as bought

## Setup.

- From the root folder: cd CA1/webdevapp
-                       npm install
-                       npm start
- The app should now be running at http://localhost:3000

## Data Model Design.

![Data Model Design]()

## UI Design.

. . . . . Screenshots of the app's views with brief statements of their use (see examples below) . . . . . . .

![][main]

>> Shows a card for each contact in the datastore. This contact list can be filtered by name and gender. A contact can be edited or deleted a contact. 

![][detail]

>> . . . bla bla bla . . . . . 

## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- /articles (public)- displays all published articles - title and author only.
- /articles/:id (private) - detail view of a particular article.
+ /articles/:author:id - display all articles by a specific author.
- etc
- etc

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .

![][stories]

. . . . (Optional) State any non-standard Storybook add-ons used and include a screenshot(s) to illustrate.

## Backend (Optional).

. . . . . Briefly explain any backend used by the app (e.g. JSON-server, Open API) . . . . . .  

## Authentication (Optional).

. . . . Briefly explain the authentication method used by your app (e.g. JWT, Firebase) ). If user registration is not supported, mention test username/password pairs available . . . . . .

## Independent learning.

. . . . . State any non-standard aspects of React or other related technologies that you researched and applied in this assignment, other than those covered by the two previous sections . . . . .

[model]: ./img/model.png
[main]: ./img/main.png
[detail]: ./img/detail.png
[stories]: ./img/stories.png
