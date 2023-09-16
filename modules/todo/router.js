import Router from "express";

const myRouter = new Router()
myRouter.get('/hello', function(req, res) {res.send('hello hyesos')})

myRouter.post("/post")


export default myRouter