"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
const node_path_1 = __importDefault(require("node:path"));
mongoose_1.default
    .connect("mongodb://localhost:27017")
    .then(() => {
    const app = (0, express_1.default)();
    app.use("/uploads", express_1.default.static(node_path_1.default.resolve(__dirname, "..", "uploads")));
    app.use(express_1.default.json());
    app.use(router_1.router);
    console.log("Conectado ao mongo");
    app.listen(3001, () => {
        console.log("Server is running on http://localhost:3001");
    });
})
    .catch(() => console.log("Erro na conexão com o MongoDB"));
