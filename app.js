const express = require('express');
const app = express();
const port = 3000; // Ganti dengan port yang Anda inginkan
const productRouter = require('./routes/product');
const bodyParser = require('body-parser');
const Loggger = require('./middlewares/logger');

// Menggunakan middleware bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//implementasi custom middleware
app.use(Loggger);

// Mengarahkan rute ke file produk
app.use('/products', productRouter);


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
