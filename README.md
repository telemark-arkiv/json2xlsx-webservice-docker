[![Build Status](https://travis-ci.org/telemark/json2xlsx-webservice-docker.svg?branch=master)](https://travis-ci.org/telemark/json2xlsx-webservice-docker)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# json2xlsx-webservice-docker
Post json data and get a xlsx document in return

```sh
curl \
  -X POST \
  -d 'data=[{"tittel":"text","type":"person"},{"tittel":"text1","type":"person2"}]' \
   http://localhost:3000 > converted.xlsx
```

## Docker

Run the image

```sh
docker run -d -p 3000:3000 --name json2xlsx_2 telemark/json2xlsx-webservice-docker
```
