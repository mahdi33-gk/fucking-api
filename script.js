const user = { id:2, name: 'mehedi' , job: 'kisona'}

const stringified = JSON.stringify(user)

console.log(user)

fetch('https://openapi.programming-hero.com/api/peddy/pets')
.then(response => response.JSON())
.then (JSON => console.log(JSON))