import express from "express";
import { addStok, barang, minStok } from "../../controller/barang/BarangController.js";


const routerBarang = express.Router();

routerBarang.get('/produk' ,barang);
routerBarang.put('/produk/:id' ,minStok);
routerBarang.put('/add-stok/:id' ,addStok);


export default routerBarang;