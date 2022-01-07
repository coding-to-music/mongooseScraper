## CTG Scraper

https://github.com/tastaub/mongooseScraper

https://github.com/coding-to-music/mongooseScraper

##### Web scraper for sports statistics [Cleaning The Glass](https://www.cleaningtheglass.com)

##### Technologies Used
- Materialize
- Handlebars
- Node
- MongoDB
- Mongoose
- Cheerio

### Demo
[CTG Scraper](https://stark-crag-37953.herokuapp.com/) (does not work)

### Scraper
#### Clip Artiles
Clicking the clip button at start will populate the db with articles from Cleaning the Glass.
#### Article Cards
Article cards contain an image link to the article source, title, and summary.
Clicking the floppy icon saves the article as a favorite.
Once clicked a star icon appears and will remove from favorites on click.
#### Comments
Users can add comments to the article db by clicking the _+_ icon on the card.
If comments are available for viewing a view message button will be visible from the message input.
#### Saved Articles
Clicking trash icon removes the article from the database.
#### View Comments
Comments can be removed from the article by clicking the trash icon.

## Changes from original repo:

Modified the connection
```java
mongoose.connect(MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true
});
```

```java
npm list mongodb
```

Before
```java
mongoosescraper@0.0.0 /mnt/ap/ap/mongooseScraper
└─┬ mongoose@5.2.4
  └── mongodb@3.1.1
```

```java
npm update mongodb
```

```java
npm audit fix
```

```java
npm list mongodb
```

After - Output
```java
mongoosescraper@0.0.0 /mnt/ap/ap/mongooseScraper
└─┬ mongoose@5.13.14
  └── mongodb@3.7.3
```

### Load .env 
```java
npm i dotenv
```

create the file .env and adjust the details from the MongoDB Atlas dashboard
```java
MONGODB_URI="mongodb+srv://userid:password@cluster0.zadqe.mongodb.net/CTG-Clipper?retryWrites=true&w=majority"
```

### To run the app
```java
npm run start
```

or 

```java
npm run trace
```

### View the UI at:  
http://localhost:8080/


Output
```java

> mongoosescraper@0.0.0 start
> node ./server.js

MONGODB_URI mongodb+srv://userid:password@cluster0.zadqe.mongodb.net/database-name?retryWrites=true&w=majority
Example app listening on port 8080!
Connected to MongoDB
GET / 304 26.046 ms - -
GET /css/style.css 304 2.153 ms - -
GET /scraper 302 136.143 ms - 62
Handlebars: Access has been denied to resolve the property "link" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
Handlebars: Access has been denied to resolve the property "isFav" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
Handlebars: Access has been denied to resolve the property "_id" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
Handlebars: Access has been denied to resolve the property "title" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
Handlebars: Access has been denied to resolve the property "comments" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
GET /articles 200 61.592 ms - 32666
GET /css/style.css 304 0.500 ms - -
GET /class=%22z-depth-5%22 404 1.767 ms - 160
GET /class=%22z-depth-5%22 404 1.436 ms - 160
GET /favorite/ 404 1.563 ms - 148
GET /target=%22_blank%22 404 0.728 ms - 158
GET /saved 304 18.154 ms - -
GET /css/style.css 304 0.436 ms - -
GET /articles 304 24.664 ms - -
GET /css/style.css 304 0.541 ms - -
GET /class=%22z-depth-5%22 404 0.608 ms - 160
GET /class=%22z-depth-5%22 404 0.649 ms - 160
```

Attempt to fix by following these instructions  
https://stackoverflow.com/questions/65822312/solved-handlebars-access-has-been-denied-to-resolve-the-property-name-becaus

Install new dependancy
```java
npm i @handlebars/allow-prototype-access
npm i handlebars
```

Add to server.js
```java
const Handlebars = require('handlebars')
const exphbs = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
```

Modify the engine connection attributes
```java
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
```

# Use Curl to get responses 

Get the return code
```java
curl -o /dev/null -s -w "%{http_code}\n" http://nytimes.com/section/us
```

Output
```java
301

Get the response body
```java
curl -s https://swapi.co/api/people/1/?format=json
```java

Output
```java
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>301 Moved</TITLE></HEAD><BODY>
<H1>301 Moved</H1>
The document has moved
<A HREF="https://pipedream.com/apps/swapi">here</A>.
</BODY></HTML>
```

