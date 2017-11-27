import app from './App'

const port = process.env.PORT || 3000

export default app.listen(port, (err:JSON) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})