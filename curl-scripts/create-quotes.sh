#!/bin/bash

curl "http://localhost:4741/quotes" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "dog": {
      "user": "Quote",
      "user": "About",
      "user": "Image",
      "user_id":"1"
    }
  }'

echo
