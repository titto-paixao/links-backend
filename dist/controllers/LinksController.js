"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Link_1 = __importDefault(require("../models/Link"));
exports.default = {
    async index(req, res) {
        const linkRepository = typeorm_1.getRepository(Link_1.default);
        const links = await linkRepository.find();
        return res.status(200).json(links);
    },
    async create(req, res) {
        const { name, link } = req.body;
        const linkRepository = typeorm_1.getRepository(Link_1.default);
        const linkCreate = linkRepository.create({ name, link });
        await linkRepository.save(linkCreate);
        return res.status(201).json({ link: linkCreate });
    },
    async update(req, res) {
        const { name, link } = req.body;
        const { id } = req.params;
        const linkRepository = typeorm_1.getRepository(Link_1.default);
        await linkRepository.update(id, { name, link });
        const getLink = await linkRepository.findOne(id);
        return res.status(200).json({ link: getLink });
    },
    async delete(req, res) {
        const { id } = req.params;
        const linkRepository = typeorm_1.getRepository(Link_1.default);
        await linkRepository.delete(id);
        return res.status(200);
    },
};
