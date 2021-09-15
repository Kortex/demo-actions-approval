const http = require('http')
const port = 3000

const handler = (request, response) => {
    console.log(request.url)
    response.end('Hello from NodeJS Server!')
}

const server = http.createServer(handler)
server.listen(port, error => {
    if (error) {
        console.log('An error has occurred while handling a request', error)
    }
    console.log(`server is listening on ${port}`)
})