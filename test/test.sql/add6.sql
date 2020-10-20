SELECT items.name, category.name
FROM items
JOIN category
on items.category_id = category.id
WHERE price >= 500
;
