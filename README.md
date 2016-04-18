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

Build the image

```sh
$ docker build -t json2xlsx .
```

Run the image

```sh
docker run -d -p 80:3000 --name json2xlsx json2xlsx
```
