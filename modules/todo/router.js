import Router from "express";

const myRouter = new Router()
myRouter.get('/hello', function(req, res) {res.send('Hello! I use arch btw...')})

myRouter.post("/post")

export default myRouter
