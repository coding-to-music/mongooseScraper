## CTG Scraper

https://github.com/tastaub/mongooseScraper

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

```java
npm run start
```

or 

```java
npm run trace
```
