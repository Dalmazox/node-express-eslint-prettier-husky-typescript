import RequestMethods from '../enums/RequestMethodsEnum'
import { Request, Response, NextFunction } from 'express'

interface Route {
  method: RequestMethods
  endpoint: string
  token: boolean
  execute(req: Request, res: Response, next: NextFunction): Response
}

export default interface RouterConfig {
  prefix: string
  routes: Route[]
}
