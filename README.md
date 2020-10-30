
# Questions and Answers API

A Questions and Answers API that includes Users, and Questions  ( [Click HERE for Client](https://github.com/Samuel-Hawkins/questions-and-answers-client) )

## Preparation

 1. Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
 2. Checkout to a new branch (optional)
 3. Install JavaScript dependencies with `npm install`.
 4. Ensure that you have nodemon installed by running npm install -g nodemon.
 5. Run the API server with nodemon by running npm run s.


## Structure

Dependencies are stored in [`package.json`](package.json).

The `app` directory contains all models and route files:

+ ./app/models/question.js : Defines the schema for creation and management of a users questions
+ ./app/models/user.js : Defines the Schema for user creation and management

+ ./app/routes/question_routes.js : defines express routes for creation and managment of a users questions
+ ./app/routes/user_routes.js : defines express routes for user creation and management


The `lib` directory is for code that will be used in other places in the
application. The token authentication code is stored in `lib/auth.js`. The
other files in `lib` deal with error handling. `custom_errors.js` is where all
the different custom classes of errors are created. If you need some other kind
of error message, you can add it here. There are also some functions defined
here that are used elsewhere to check for errors. `lib/error_handler.js` is a
function that will be used in all your `.catch`es. It catches errors, and sets
the response status code based on what type of error got thrown.

## ERD

![ERD](https://i.imgur.com/IzhmCoX.jpg)


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |

### Event Management
| Verb   | URI Pattern             | Controller#Action     |
|--------|-------------------------|-----------------------|
| GET    | `/questions`            | `questions#getByOwner`|
| GET    | `/questions-public`     | `questions#get`       |
| GET    | `/questions/:id`        | `questions#getById`   |
| GET    | `/questions/public/:id` | `questions#getById`   |
| POST   | `/questions`            | `questions#create`    |
| PATCH  | `/questions/:id`        | `questions#update`    |
| DELETE | `/questions/:id`        | `questions#delete `   |
