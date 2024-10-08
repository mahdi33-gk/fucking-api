const loadAllPets = async()=>{
    const res =await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data =await res.json()
    displayPetsAll(data)
}

const displayPetsAll = (data) =>{
console.log(data)
}