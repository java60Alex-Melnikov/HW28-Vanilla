function getUserPassword(probCorrectPass) {
  //example what should be done in the HW solution
  const passwords = ['correct', 'wrong'];
  const index =  Math.random() < probCorrectPass ? 0 : 1
  return new Promise(resolve => {
    setTimeout(() => resolve(passwords[index]));
  })
}
function login(password) {
  //TODO
  //returns promise in the state resolved only for passowrd 'correct' otherwise state rejected
}
function getUserData(username) {
  const users = {'Vasya': {name: "Vasya", age: 30},
  'Petya': {name: "Petya", age:40}}
  //TODO
  //returns promise in the state resolved if username exists with returning user data
  //otherwise state rejected with apropriate message

  }
function funStackExample(username) {
  // const password = getUserPassword(0.8);
  // try {
  //   login(password);
  //   const userData = getUserData(username);
  //   console.log(userData);
  // } catch (error) {
  //   console.log(`error: ${error}`)
  // }
  //runs the same functionality as commented out above but with calling of asynchronous functions
}
funStackExample('Vasya')