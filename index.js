const express = require('express')
const app = express()
const connectDB = require("./config/db")
const userRoute = require('./routers/user')
const postRoute = require('./routers/post')
const authRoute = require('./routers/auth')
app.use(express.json({ extended: false }));
connectDB()
const PORT = 8080
app.use('/api/user/' , userRoute)
app.use('/api/auth/' , authRoute)
app.use('/api/post/' , postRoute)
app.listen(PORT , ()=>console.log("server started"))
