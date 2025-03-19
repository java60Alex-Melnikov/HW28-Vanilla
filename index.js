function getUserPassword(probCorrectPass) {
  const passwords = ['correct', 'wrong'];
  const index =  Math.random() < probCorrectPass ? 0 : 1
  return new Promise(resolve => {
    setTimeout(() => resolve(passwords[index]), 1000);
  })
}
function login(password) {
  return new Promise((resolve, reject) => setTimeout(() => {
    (password === 'correct') ? resolve('Login successful') : reject('Invalid password')}, 2000))
  }

    function getUserData(username) {
  const users = {
    'Vasya': {name: "Vasya", age: 30},
  'Petya': {name: "Petya", age:40}}
 
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      (users[username]) ? resolve(users[username]) : reject(`User ${username} not found`)}, 1000)})
    }

    function funStackExample(username) {
      getUserPassword(0.5)
      .then(password => {
        return login(password);
      })
      .then(() => {
        return getUserData(username);
      })
      .then(userData => {
        console.log(userData);
      })
      .catch(error => {
        console.log(`error: ${error}`);
      });
    }

funStackExample('Vasya')

