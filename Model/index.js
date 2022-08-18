const express = require('express')
const path = require('path')
const app = express()
const port = 5000
const mongoose = require('mongoose')


//mongodb+srv://kimo3743:3743@cluster0.5tg9wzd.mongodb.net/?retryWrites=true&w=majority
app.use(express.static(path.join(__dirname,'../client/build')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { Post } = require("./Model/Post.js")

app.listen(port, () => {
  mongoose
  .connect(
    'mongodb+srv://kimo3743:3743@cluster0.5tg9wzd.mongodb.net/Community?retryWrites=true&w=majority')
  .then(() => {
    console.log(`Example app listening on port ${port}`)
    console.log("Connecting Mongodb...")
  })
  .catch((err) => {
    console.log(`$(err)`)
  })
  
})

app.get('/', (요청, 응답) => {
    응답.sendFile(path.join(__dirname,'../client/build/static/index.html'))
  })
  app.get('*', (요청, 응답) => {
    응답.sendFile(path.join(__dirname,'../client/build/static/index.html'))
  })

  app.post("/api/test", (요청,응답) => {
    const CommunityPost = new Post({ title: "text", content: '테스트입니다!'})
    CommunityPost.save().then(() => {
    응답.status(200).json({ success: true, text: "안녕하세요" })
    })
  })