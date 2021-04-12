import {getRepository} from 'typeorm'
import Link from '../models/Link'

export default {
  async index(req, res){

    const linkRepository = getRepository(Link)

    const links = await linkRepository.find();

    return res.status(200).json(links)
  },
  async create(req, res){
    const {name, link} = req.body

    const linkRepository = getRepository(Link)

    const linkCreate = linkRepository.create({name, link})

    await linkRepository.save(linkCreate)

    return res.status(201).json({link:linkCreate})
  },

  async update(req, res){
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
  
  async delete(req, res){
    const {id} = req.params

    const linkRepository = getRepository(Link)

    await linkRepository.delete(id)

    return res.status(200)
  },
}