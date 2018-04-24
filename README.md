# Textbook Rental App

AEXUS Textbooks:
I am making a textbook rental app. I have a database of textbooks with two tables: textbooks and genres. Textbook table has an id,
title, author, image, genre, price columns, rating. Genres table has an id, name, image columns. 
There is a page for genres and a page for textbooks. There is also a page for each textbook.
There is an Add New Textbook page and a Cart page for when you added a textbook to the cart.

Video Presentation:
https://www.youtube.com/watch?v=A-85fLe-oyA&feature=youtu.be

Link to App:
https://textbookapp.herokuapp.com/

User Stories:
- log in and register
- add textbook to cart
- Edit and delete textbook in cart
- Add and delete textbook from site

## Wireframes

Include images of your wireframes. 
![:image](https://github.com/xshirl/textbookapp/blob/master/images/wireframe1.jpg)
![:image](https://github.com/xshirl/textbookapp/blob/master/images/wireframe2.jpg)
![:image](https://github.com/xshirl/textbookapp/blob/master/images/wireframe3.jpg)

##Technologies
- Node.js
- Express.js
- PostGreSQL
- Javascript
- EJS/HTML
- CSS
- Nodemon, bcrypt, pg-promise, morgan, body-parser, nodemon, ejs, method-override,
express-session, dotenv

## Code
```
<form action="/textbooks/cart/<%=textbook.id%>?_method=PUT" class='delete' method="POST">
  <input type="hidden" name="title" value="<%= textbook.title%>" />
  <input type="hidden" name="author" value="<%= textbook.author%>" />
  <input type="hidden" name="price" value="<%= textbook.price%>" />
  <input type="hidden" name="rating" value="<%= textbook.rating%>" />
  <input type="hidden" name="img" value="<%= textbook.img%>" />
  <input type="hidden" name="isincart" value="false">
  <input type="hidden" name="isrented" value="false">
  <input type="hidden" name="genre_id" value="<%=textbook.genre_id%>">
  <input type="submit" class="dellink" value="Delete">
  </form>
```
This updates the isincart column to false so when I update the book, it deletes it
from the cart. I use the PUT method instead of DELETE method here because I
don't want to delete it from the entire database. I use DELETE method elsewhere
on the individual book page to delete it from the database. 

## Additional features
I plan to create a cart for each user so that each user can check out items. This
means creating a cart table and a cartproducts table that joins the carts and the
products. 

##Instructions
1. Git clone the repo.
2. ```createdb textbooks_db ```
3. ```psql -f db/schema.sql```
4. ```psql -f db/seed.sql```
5. npm i
6. App available on localhost:3001


