SELECT title, publication_year, publisher.name AS "publisher"
FROM book
JOIN publisher
ON book.publisher_id = publisher.id
WHERE publisher.id = 1
;