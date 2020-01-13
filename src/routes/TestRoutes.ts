import { Router, Response } from 'express'
import RouteMapper from '../middlewares/RouteMapper'
import RouterConfig from '../interfaces/IRouterConfig'
import RequestMethods from '../enums/RequestMethodsEnum'

export default class TestRoutes extends RouteMapper {
  static config: RouterConfig = {
    prefix: '/test',
    routes: [
      {
        method: RequestMethods.GET,
        endpoint: '',
        token: false,
        execute: ({ res }): Response => res.send('Rotas funcionando'),
      },
    ],
  }

  static init(route: Router): void {
    super.init(route, this.config)
  }
}
