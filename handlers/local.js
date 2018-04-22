import  app from  "../server"
const port = process.env.port || 4000

app.listen(port, () => {
    console.log(`server started ${port}`)
})
