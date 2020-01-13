import RouterConfig from '../interfaces/IRouterConfig'
import RequestMethods from '../enums/RequestMethodsEnum'
import { Router } from 'express'

abstract class RouteMapper {
  static init(router: Router, config: RouterConfig): void {
    const { prefix, routes } = config

    routes.map(route => {
      switch (route.method) {
        case RequestMethods.GET:
          router.get(`${prefix}`, route.execute)
          break
        case RequestMethods.POST:
          break
        case RequestMethods.PUT:
          break
        case RequestMethods.DELETE:
          break
      }
    })
  }
}

export default RouteMapper
