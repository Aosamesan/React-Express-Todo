'use babel'

import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'

const app = express()

// 리퀘스트 파서
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// 뷰 렌더러
app.set('views', 'public')
app.set('view engine', ejs)
app.engine('html', ejs.renderFile)

// static resources
app.use('/js', express.static('public/js'))
app.use('/css', express.static('public/css'))

// route
app.get('/', (req, res) => {
    return res.render('index.html')
})
app.get('/*', (req, res) => {
    res.status(404)
    return res.send("Page Not Found")
})

// listen
const port = 3000
app.listen(port, () => console.log("Server starts... port : " + port))