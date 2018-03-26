# Oil My Life Blog

Oil My Life is my wife's side business.  She wanted to create a blog to be able to share information and process through life thoughts.  Users can create an account and leave/edit comments on a post.  The admin user can create, edit, or delete new blog posts and all comments.  Upon landing on the root route, the user is presented with a selection of blog posts cards, with the three most recent presnted first.  Blogs are categorized by the date of creation and associated tags.  The app is served from an Express server that serves the pages with EJS templating, and the data is stored in a MongoDB database.  Gulp is the task runner with Webpack bundling JavaScript.

## Getting Started

- Fork or clone the repo into your local directory.
- Run `npm install` to download dependencies listed in `package.json`.
- Use `gulp watch` to start a dev server.

### Prerequisites

This project requires NodeJs at least `v8.7.0` and npm `5.6.0` to guarantee the code will run as is.

## Running tests

Testing is not included in this app as of yet.  Feel free to add your own test suite.

## Deployment

Deploy the app to a hosting service of your choice.  Remember that there is the app itself and an associated MongoDB database that will need to be accounted for.  In its current production setup, the app is hosted on one server, and the database is hosted on another.

## Built With

* Express (https://expressjs.com/) - Node framework
* MongoDB (https://www.mongodb.com/) - NoSQL database
* Mongoose (http://mongoosejs.com/) - MongoDB object modeling
* Passport (http://www.passportjs.org/) - Authentication
* Gulp (https://gulpjs.com/) - Task runner
* webpack (https://webpack.js.org/) - Module bundler

## Author

* **Mark McConnell** - *Creator* - (https://github.com/korrollir)

## Acknowledgments

* Colt Steele - Udemy Web Developer's Bootcamp for teaching the underlying framework upon which this app is built.