curl "https://tranquil-plains-95557.herokuapp.com/groceries" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "grocery": {
      "name": "'"${NAME}"'",
      "amount": "'"${AMNT}"'",
      "food_type": "'"${TYPE}"'"
    }
  }'
echo
