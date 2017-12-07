// const recipes = require('db/fixtures/recipes.json')
// const user = require('db/fixtures/user.json')
//
// const HOST = 'http://localhost:3030'
//
// //Create a user
// //POST /users
// fetch(`${HOST}/users`, {
//   method: 'POST',
//   body: JSON.stringify(user)
// })
//   .then(() => {
//     //Authenticate as the user
//     //POST /sessions
//     console.log('User created! Authenticating... ')
//     fetch(`${HOST}/sessions`,{
//       method: 'POST',
//       body: {
//         emails:user.email,
//         password: user.password
//       }
//     })
//     .then((res) => {
//       console.log(res.body)
//       console.log(res.status)
//       return res.json()})
//
//     .then((res)=> {
//       console.log(res.status)
//       const { token } = res
//       console.log ('Authenticated! Token:', token)
//     })
//     .catch((err) => console.error(err))
//   })
//   .catch((err) => console.error(err))
