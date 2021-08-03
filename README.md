# mintcard
A simple card game

## Installation

Clone the repository

```bash
git clone ${repositoryURL}
```

Navigate into the root directory

```bash
cd /
```
run npm install (to install all dependencies)

```bash
npm install
```
run firebase emulators:start (to start server locally)

```bash
run npm start
```

## Usage

Available endpoints:

# BaseUrl : http://oba-game-app.herokuapp.com/  

${rootUrl}/:
```

to check if email exist

to save new user data into database

to get specific user details from database
```

${rootUrl}/auth
```
signup a new user with firebase auth and create new user in database

method: POST
parameters: valid email, password and username
returns: registered user id, email and username as an object

```

${rootUrl}/auth/login
```

to login a registered user with firebase auth and retrieves registered user from database

method: POST
parameters: registered email & password
returns: registered user id, email and username as an object

```

${rootUrl}/forgotpassword
```

to send reset password link to registered user email with firebase auth

method: POST
parameters:valid user email
returns: 'reset email sent'

```

${rootUrl}/games
```

to save a record of a game in the database

method: POST
parameters: valid forgotpassword CODE & NEW PASSWORD
returns { game, message: 'Game has been saved'}

```
${rootUrl}/games/:email
```

to reset/update user account with new password with firebase auth

method: GET
parameters: registered email in the URL as a parameter
returns { gameArray, message: 'List of games'}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
