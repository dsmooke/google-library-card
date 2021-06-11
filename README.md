# Google Library Card

<span align="left">

<a href="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"/></a>

 </span>
 
## Description

A React-based Google Books Search application.

View the deployed application [here](inactive)

** **Update April 2021** link to the deployed application is inactive **

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Goals](#goals)
- [Instructions](#instructions)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- React
- Node
- Express
- MongoDB
- Mongoose

## Goals

- Search for books using Google Books API
- Save books
- Render all books saved to the Mongo database
- View and Delete button
- Use mongoose and create a Book schema
- Deploy to Heroku
- Add application/repository to your portfolio

## Instructions

To create React components, work with helper/util functions, and utilize React lifestyle methods to query and display books based on user searches. Use Node, Express and MongoDB so that users can save books to review or purchase later.

This application requires at minimum 2 pages, check out the following mockup images for each page:

[Search]("./public/imgs/Example-Search-Books.png") - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

[Saved]("./public/imgs/Example-Saved-Search.png") - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

1. Start by using the 01-Ins_Mern/create-react-express example as a base for your application.

2. Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.

3. Using mongoose, then create a Book schema.

4. At a minimum, books should have each of the following fields:

- `title` - Title of the book from the Google Books API

- `authors` - The books's author(s) as returned from the Google Books API

- `description` - The book's description as returned from the Google Books API

- `image` - The Book's thumbnail image as returned from the Google Books API

- `link` - The Book's information link as returned from the Google Books API

- Creating `documents` in your `books` collection similar to the following:

```
{
  authors: ["Suzanne Collins"]
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  title: "The Hunger Games"
}
```

5. Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses [react-router-dom]() to navigate, hide and show your React components without changing the route within Express.

- The layout should include at least two React Components for each page `Search` and `Saved`.

6. Feel free to try out alternative CSS framework to Bootstrap.

- Add the following Express routes for your app:

- `/api/books` (get) - Should return all saved books as JSON.

- `/api/books` (post) - Will be used to save a new book to the database.

- `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo \_id.

- `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this after all other routes are defined.

- Deploy your application to Heroku once complete. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

## User Story

```
AS A reader who is always looking for new books to read
I WANT an application that finds me book recommendations based on my search input
SO THAT I can save books that interest me AND refer to them when it's time for a new book

```

## Acceptance Criteria

```
GIVEN a book finding application that finds books based on user's selection
WHEN a user clicks on the link
THEN the application will open in Heroku
WHEN on the Search Page and a user inputs a search and clicks the search button
THEN the Google API will render the books below
WHEN a user clicks the View book button
THEN they will be directed to the book page on Google Books
WHEN a user clicks the Save book button
THEN the book will be saved to the Mongo database
WHEN a user clicks the Saved page
THEN the user will be directed to a page that displays all their saved books
WHEN on the Saved books page
THEN the user will have the option to View or Delete a book
WHEN a user clicks the Delete button
THEN the book will be deleted from the page and the Mongo database
WHEN the user clicks the View button on the Saved page
THEN the user will be directed to the book page on Google Books

WHEN the user examines the documentation of the application
THEN the user will see a folder structure that meets the MVC paradigm
WHEN the user examines the code of the application
THEN the user will see code that meets good quality coding standards

```
## Installation

1. Clone repo and install packages. Edit scripts within package.json file. npm start to run in integrated terminal, run in browser with localhost:3000.

## Contributing

[Dana Smooke]("https://github.com/dsmooke")

## License

[MIT]("https://opensource.org/licenses/MIT")

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
