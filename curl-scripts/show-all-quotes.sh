#!/bin/bash

curl "http://localhost:4741/quotes" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
