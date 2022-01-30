const express = require('express')
const path = require('path')
const app = express()


//set a stact folder to be able u it as a server to serve multiple pages without having to route eact individually 

app.use(express.static(path.join(__dirname, 'public')))



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))