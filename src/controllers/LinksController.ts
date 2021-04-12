import {Request, Response} from 'express'
import {getRepository} from 'typeorm'
import Link from '../models/Link'

export default {
  async index(req:Request, res:Response){

    const linkRepository = getRepository(Link)

    const links = await linkRepository.find();

    return res.status(200).json(links)
  },
  async create(req:Request, res:Response){
    const {name, link} = req.body

    const linkRepository = getRepository(Link)

    const linkCreate = linkRepository.create({name, link})

    await linkRepository.save(linkCreate)

    return res.status(201).json({link:linkCreate})
  },

  async update(req:Request, res:Response){
    const {name, link} = req.body
    const {id} = req.params

    const linkRepository = getRepository(Link)

    await linkRepository.update(
      id,
      {name, link}
    );

    const getLink = await linkRepository.findOne(id);

    return res.status(200).json({link:getLink})
  },
  
  async delete(req:Request, res:Response){
    const {id} = req.params

    const linkRepository = getRepository(Link)

    await linkRepository.delete(id)

    return res.status(200)
  },
}