# Timer 

An Express NodeJS application to save  daily activity. Using the stack: NodeJS+Express+Postgress+APIDocs;

## API Docs

See the api docs in [Heroku](http://immense-reaches-20362.herokuapp.com/docs/)

## Tests

For test you can use:

```shell

mocha -R spec test/testActivity.js 

mocha -R spec test/testAuth.js 

```
## Database

Create a empty database and create the tables as in 

```

sql\tables.sql

```

Before start nodejs server, please export the DATABASE_URL

```

export DATABASE_URL=postgres:///DATABASE_NAME

```

Where DATABASE_NAME is the name of your local postgress database

More soon...