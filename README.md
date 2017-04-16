# html-to-pdf-api


## Usage

Start express webserver with example at port 3000

```
npm install
npm start
```

Convert a HTML file to PDF via [Postman](https://www.getpostman.com/)

```
Send form-data request with html file data (use the "file" key) at localhost:3000/htmlToPdf
```

Convert a HTML file to PDF via curl

```
curl -X POST \
  http://localhost:3000/htmlToPdf \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -H 'postman-token: 152b9b51-791f-c1e7-63ba-0d830c9808ba' \
  -F file=@/Users/user/Downloads/file.html
```
