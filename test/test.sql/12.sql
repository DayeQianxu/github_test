SELECT title, publication_year, author.name
FROM book
JOIN author
ON book.author_id = author.id
WHERE author.id = 2
;