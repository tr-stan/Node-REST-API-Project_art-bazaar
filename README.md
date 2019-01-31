# print-original-bazaar
A marketplace app where users can buy either the original or a print of a piece of art

## Purpose:
The purpose of this app is to demonstrate competency with building SQL databases that utilize all types of relationships:
- One-to-one
- One-to-many
- Many-to-many

This app will be composed of pieces of art (items) that are for sale. Each piece of art will have one original, and numerous prints for sale. Users can purchase the one original, if it hasn't already been sold. The originals will cost more than the prints (copies).

## How this uses the SQL relationships and satisfies the goal of this project:

- One-to-one: Each item has only one original
- One-to-many: Each item has many prints
- Many-to-many: A user can purchase multiple items, and multiple users can purchase a print of the same item