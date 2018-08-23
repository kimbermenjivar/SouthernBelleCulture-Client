  #!/bin/bash

curl "http://localhost:4741/quotes/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "quote": {
      "quote": "quote",
      "user": "about",
      "user": "image",
      "user_id": 1
    }
  }'

echo
