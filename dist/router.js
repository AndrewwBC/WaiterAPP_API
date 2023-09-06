"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const node_path_1 = __importDefault(require("node:path"));
const express_1 = require("express");
const multer_1 = __importStar(require("multer"));
const listCategories_1 = require("./app/useCases/categories/listCategories");
const createCategory_1 = require("./app/useCases/categories/createCategory");
const listProducts_1 = require("./app/useCases/products/listProducts");
const createProduct_1 = require("./app/useCases/products/createProduct");
const listProductsByCategory_1 = require("./app/useCases/categories/listProductsByCategory");
const listOrders_1 = require("./app/useCases/orders/listOrders");
const createOrder_1 = require("./app/useCases/orders/createOrder");
const changeOrderStatus_1 = require("./app/useCases/orders/changeOrderStatus");
const cancelOrder_1 = require("./app/useCases/orders/cancelOrder");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: (0, multer_1.diskStorage)({
        destination(req, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, "..", "uploads"));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
exports.router.get("/categories", listCategories_1.listCategories);
exports.router.post("/categories", createCategory_1.createCategory);
exports.router.get("/products", listProducts_1.listProducts);
exports.router.post("/products", upload.single("image"), createProduct_1.createProducts);
exports.router.get("/categories/:categoryId/products", listProductsByCategory_1.listProductsByCategory);
// orders
exports.router.get("/orders", listOrders_1.listOrders);
exports.router.post("/orders", createOrder_1.createOrder);
//Alteração parcial, usamos PATCH
exports.router.patch("/orders/:orderId", changeOrderStatus_1.changeOrderStatus);
exports.router.delete("/orders/:orderId", cancelOrder_1.cancelOrder);
