const user = { id:2, name: 'mehedi' , job: 'kisona'}

const stringified = JSON.stringify(user)

console.log(user)



function overboard(){
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
       .then(response => response.json())
       .then (data => dataeror(data))
}
function dataeror(data){
    for(const user of data){
        console.log(user.name)
    }
}

function overboard(){
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
       .then(response => response.json())
       .then (data => console.log(data))
}
overboard();