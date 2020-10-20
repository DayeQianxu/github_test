SELECT first_name, last_name, salary
FROM employee
WHERE salary > (
 SELECT avg(salary)
 FROM employee
);