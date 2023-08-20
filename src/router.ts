import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";

export const router = Router();

router.get("/categories", listCategories);

router.post("/categories", createCategory);

router.get("/products", (req, res) => {
  res.send("Ok");
});

router.post("/products", (req, res) => {
  res.send("Ok");
});

router.post("/categories/:categoryId/products", (req, res) => {
  res.send("Ok");
});

// orders

router.get("/orders", (req, res) => {
  res.send("Ok");
});

router.post("/orders", (req, res) => {
  res.send("Ok");
});

//Alteração parcial, usamos PATCH
router.patch("/orders/:orderId", (req, res) => {
  res.send("Ok");
});

router.delete("/orders/:orderId", (req, res) => {
  res.send("Ok");
});
