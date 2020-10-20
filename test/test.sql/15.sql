SELECT title, publication_year
FROM book
WHERE publication_year >= (
 SELECT publication_year
 FROM book
 WHERE id=1
);