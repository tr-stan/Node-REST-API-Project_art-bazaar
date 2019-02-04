SELECT Products.name, Products.category, Products.is_print, Products.price, Products.description, Users.username
FROM Products, Users
WHERE Products.artist = Users.id