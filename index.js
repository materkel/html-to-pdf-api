const express = require('express');
const multer  = require('multer');
const pdf = require('html-pdf');
const upload = multer();
const app = express();

// Use more detailed options documented @
// https://github.com/marcbachmann/node-html-pdf
const pdfOptions = { format: 'A4' };

app.post('/htmlToPdf', upload.single('file'), (req, res, next) => {
  const file = req.file;

  if (isValidHtml(file))  {
    const html = file.buffer.toString('utf8');

    transformHtmlToPdf(html)
      .then(pdf => {
        res.attachment('result.pdf');

        pdf.pipe(res);
      })
      .catch(err => {
        res.status(500).send('PDF creation failed');
      });
  }
});

app.listen(3000);

function isValidHtml(file) {
  return file &&
    file.mimetype === 'text/html' &&
    file.size > 0 &&
    file.buffer !== undefined;
}

function transformHtmlToPdf(html) {
  return new Promise((resolve, reject) => {
    pdf.create(html, pdfOptions).toStream((err, stream) => {
      if (err) {
        reject(err);
      } else {
        resolve(stream);
      }
    });
  });
}
