SELECT title AS "Book Title", publication_year AS "Year"
FROM book
WHERE NOT publication_year = 2008
;