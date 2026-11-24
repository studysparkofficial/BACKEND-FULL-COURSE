const express = require('express')
const app = express()
const PORT = 4242

let data = ["anshul"]

//middleware

app.use(express.json())

app.get('/', (req,res) => {
    console.log('its my first server',req.method)
    res.send(`
        
        <h1>Data : ${data}</h1> 
        <a href='/dashboard'>Dashboard</a>
        `)
})

app.get('/dashboard', (req,res) => {
    console.log('its from dashboard endpoint',req.method)
    res.send(`
        <h3>its from dashboard</h3>
        <a href='/'>HomePage</a>
        `)
})

//CRUD create read update and delete 

app.post('/api/data', (req,res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})
app.delete('/api/data',(req,res) => {
    data.pop()
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`sever is connected on PORT ${PORT}`))