import { Router } from 'express'
import TestRoutes from './routes/TestRoutes'

const route = Router()

TestRoutes.init(route)

export default route
