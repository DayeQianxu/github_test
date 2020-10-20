SELECT SUM(price * count)
from cart
JOIN items
on cart.item_id = items.id
;