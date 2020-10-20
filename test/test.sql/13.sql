SELECT AVG(salary), kids_number
FROM employee
GROUP BY kids_number
HAVING AVG(salary) > 150000
;