SELECT items.name
FROM category
JOIN items
on category.id = items. category_id
WHERE sale_flg = 1
;