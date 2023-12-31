"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductd = exports.postProduct = exports.deleteProduct = exports.getProduct = exports.getProducts = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield producto_1.default.findAll();
    res.json(listProducts);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => {
    res.json({
        msg: 'get products',
        id: req.params.id
    });
};
exports.getProduct = getProduct;
const deleteProduct = (req, res) => {
    res.json({
        msg: 'delete',
        id: req.params.id
    });
};
exports.deleteProduct = deleteProduct;
const postProduct = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post product',
        body
    });
};
exports.postProduct = postProduct;
const updateProductd = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'update product',
        id,
        body
    });
};
exports.updateProductd = updateProductd;
