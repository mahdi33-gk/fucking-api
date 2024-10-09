// const loadcategories = () => {
//     fetch('https://openapi.programming-hero.com/api/peddy/categories')
//     .then((res) => res.json())
//     .then(data => displaycategories(data.categories)) 
// }

// const displaycategories = (categories) => {
//     const categoricontainer = document.getElementById('post-container')
//     categories.forEach(item => {
//         console.log(item)

//         const button = document.createElement("div");
//         button.classList = "btn flex flex-row";
//         button.innerText =item.category;
//         button.innerHTML =`
//         <img class="w-6 " src="${item.category_icon}" alt="${item.category}" /> 
//             ${item.category}  
        
//         `
        

//         categoricontainer.append(button);
        
//     });


// }

// const allpost = () => {
//     fetch('https://openapi.programming-hero.com/api/peddy/pets')
//     .then((res) => res.json())
//     .then(data => alldatapost(data.price))
// }

// const alldatapost = (data) => {
//     const heythere = document.getElementById('heythere')
//     const pets = data.pets;
//     pets.forEach(item =>{
//         console.log(item)
//     })

    

// }
// allpost();

// loadcategories();



const loadcategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then(data => {
            console.log("Categories Data:", data); 
            displaycategories(data.categories); 
        })
        .catch(error => console.error("Error fetching categories:", error));
};


const displaycategories = (categories) => {
    const categoricontainer = document.getElementById('post-container');
    categories.forEach(item => {
        console.log("Category Item:", item); 

        const button = document.createElement("div");
        button.classList = "btn flex flex-row";
        button.innerHTML = `
            <img class="w-6" src="${item.category_icon}" alt="${item.category}" />
            ${item.category}
        `;

        categoricontainer.append(button);
    });
};


const allpost = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then(data => {
            console.log("Posts Data:", data); 
            alldatapost(data.pets); 
        })
        .catch(error => console.error("Error fetching posts:", error));
};


const alldatapost = (posts) => {
    const heythere = document.getElementById('heythere');
    posts.forEach(item => {
        console.log("Post Item:", item);

        const postElement = document.createElement("div");
        postElement.classList = "post-item";
        postElement.innerHTML = `

            <div class="px-2 py-2 rounded-xl w-[150px] shadow-green-950 border-[2px]">
                <img src="${item.image}" alt="${item.name}" class=" ">
                <h3 class="font-bold text-2xl mb-1">${item.pet_name}</h3>
                <p class="text-gray-500 text-[10px]"><i class="mr-1 fa-solid fa-border-none"></i>Breed: ${item.breed}</p>
                <p class="text-gray-500 text-[10px]"><i class="mr-1 fa-solid fa-calendar-days"></i>Birth: ${item.date_of_birth}</p>
                
                <p class="text-gray-500 text-[10px]"><i class="mr-1 fa-solid fa-venus"></i>Gender: ${item.gender}</p>
                
                <p class="text-gray-500 text-[10px]"><i class="mr-1 fa-solid fa-dollar-sign"></i>Price: ${item.price}$</p>

                <div class="border-t-2 mt-2 ">
                    <div class="mx-auto flex justify-between items-center mt-2"> 
                       <button id="cats" class=" text-[7px]  shadow-green-800 border-[.1px] px-2 py-1 rounded-md"><i class="text-green-950 fa-regular fa-thumbs-up"></i></button>
                       <button id="dogs" class="font-bold text-[8px]  shadow-green-950 border-[.1px] px-2 py-1 rounded-md text-primaryr ">Adopt</button>
                       <button id="rabbit" class="font-bold text-[8px]  shadow-green-950 border-[.1px] px-2 py-1 rounded-md text-primaryr">Details</button>
                       
                    </div>
                </div>

                
            </div>

            
           
            
        `;
        
        heythere.append(postElement);
    });
};

loadcategories();
allpost();


// active button function

const activebtn = document.getElementById('')
