
module.exports = function(app){

  app.get('/', (req, res) => {
    console.log('get request to /')
  })
  app.post('/', (req, res) => {
    console.log('post request to /')
  })

}