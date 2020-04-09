app.post('/cadastrar', (req, res) => {
    // Criamos um novo usuário utilizando o schema que montamos na pasta models
    var novoUsuario = new User({
      name: req.body.name, // A instrução req.body nos retorna um objeto com os dados que foram enviados através de uma requisição
      password: req.body.password
    })
  
    novoUsuario.save((err) => {
      if (err) throw err // Se tiver algum erro na hora de salvar, usamos o throw para retornar uma "exception"
  
      console.log('Usuário cadastrado com sucesso')
      res.json({
        success: true
      }) // Se tudo ocorrer bem, retornamos um json dizendo que deu certo
    })
  })
   
 // Rota que retorna todos os usuários cadastrados no banco (GET /api/users)
apiRoutes.get('/user', (req, res) => {
  User.find({}, (err, user) => { // O que fizemos aqui foi basicamente um Select na "tabela" de usuários
    if (err) { throw err }
    res.json(users)
  })
})
 
 // Rota de autenticacao de usuário (POST /api/authenticate)
 apiRoutes.post('/authenticate', (req, res) => {
  console.log(req.body)
  User.findOne({
    name: req.body.name
  }, (err, user) => { // O findOne é como um Select, passando um filtro que é o 'name'
    if (err) throw err

    // Verificamos se o usuário existe
    if (!user) {
      res.json({
        success: false,
        message: 'Usuário Existente :C'
      })
    }
      // Verificamos se a senha é correta
    if (user.password !== req.body.password) {
      res.json({
        success: false,
        message: 'Usuário não existente :C'
      })
    } else {
      
      var token = jwt.sign(user, app.get('superSecret'), {
        expiresIn: '1440m'
      }) 
      
      res.json({
        success: true,
        message: 'Aproveite!',
        token: token
      })
    }
  })
})

module.exports = users;