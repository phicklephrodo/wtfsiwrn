# WTFSIWRN
__WTFSIWRN__ is short for _"What the fuck should I watch right now?!"_

The goal of this application is to pull data from a various endpoints (IMDB, Netflix, Hulu, Amazon Prime, etc.) and provide a user with a random movie/TV show to watch. (Most of our inspiration comes from our favorite way to pick lunch http://wtfsigte.com/)


## Running Locally

```
# clone the repo
cd wtfsiwrn
npm install
npm start
# navigate to localhost:5000
```


## [GraphQL](https://learngraphql.com/basics/introduction)
GraphQL is a REST-replacing new technology introduced by Facebook to alleviate an over-abundance of REST requests from the browser to the service. Though this isn't much of a factor for a browser, it far outshines on mobile platforms. This new technology meshes very well with our prospective frontend -- React by utilizing a Relay. (We need to learn more about all of this. Maybe [here](https://github.com/mhart/simple-relay-starter)?)

### Development
For the most part I followed [this](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.3fmfe5crg) guide. 

### Playing Around
Navigate to [localhost:5000/graphql](http://localhost:5000/graphql) run a request with this payload

``` javascript
{
  film(id:4) {
    title,
    genre,
    year,
    director {
      id,
      name
    }
  }
}
```
You can alter the request by adding and removing fields, and selecting a different id.



---

__Note:__ I'm going to leave this information here until we actually know what to do with this.
## Deploying to Heroku
```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
