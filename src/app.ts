import express, { Application } from 'express'
import route from './routes'

class App {
  express: Application

  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  private middlewares(): void {
    this.express.use(express.json())
  }

  private routes(): void {
    this.express.use(route)
  }
}

export default new App().express
