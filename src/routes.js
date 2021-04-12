import {Router} from 'express'

import LinksController from './controllers/LinksController'

const routes = Router()

routes.get('/', LinksController.index)
routes.post('/', LinksController.create)
routes.put('/:id', LinksController.update)
routes.delete('/:id', LinksController.delete)

export default routes