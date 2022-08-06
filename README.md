# CRUD Routes

Create
Read
Update
Delete

## Posts

GET /posts => renders page that displays all posts (pagination, first 20/50)
GET /posts/:postId => renders page that display a single post of the given id (req.params.postId)
GET /posts/new => renders page that displays form to create a new post
POST /posts => handles form submission to create new post
GET /posts/:postId/edit => renders page that displays form to edit post of the given id (req.params.postId)
PATCH /posts/:postId => handles form submittion to execute PARTIAL update on a post
PUT /posts/:postId => handles form submittion to execute FULL update on a post
DELETE /posts/:postId => handles form submittion to delete a post

## Comments of a Post

GET /posts/:postId/comments => render page that displays all comments of a post (pagination)
GET /posts/:postId/comments/:commentId => render page that displays 1 comment of a specific post
GET /posts/:postId/comments/:commentId/edit
PATCH /posts/:postId/comments/:commentId
PUT /posts/:postId/comments/:commentId
DELETE /posts/:postId/comments/:commentId

## Replies of a comment

GET /posts/:postId/comments/:commentId/replies
.
.
.
.

## Authentication

GET /login => renders page to display form to login
POST /login => handles form submission to log user in
GET /register => renders page to display form to register
POST /login => handles form submission to create new user
DELETE /logout => handles logging of user

# User's profile

GET /profile

isAdmin => GET /users/login => renders page to display all users
.
.
.
.


