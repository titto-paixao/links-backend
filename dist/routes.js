"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LinksController_1 = __importDefault(require("./controllers/LinksController"));
const routes = express_1.Router();
routes.get('/', LinksController_1.default.index);
routes.post('/', LinksController_1.default.create);
routes.put('/:id', LinksController_1.default.update);
routes.delete('/:id', LinksController_1.default.delete);
exports.default = routes;
