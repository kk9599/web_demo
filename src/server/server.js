const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const db = require('../../mockData/mockdb.js')
const router = jsonServer.router(db)
//const routes = require('./routers')

//const routers = jsonServer.routers(path.join(__dirname, '../mockData/db.json'))
server.use(middlewares)

server.use((request, res, next) => {
	request.method = 'GET';
	next();
})

server.use(router)

server.listen(3000, () => {
	console.log('JSON Server is running')
})
