const loadcategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res) => res.json())
    .then(data => displaycategories(data.categories)) 
}

const displaycategories = (categories) => {
    const categoricontainer = document.getElementById('post-container')
    categories.forEach(item => {
        console.log(item)

        const button = document.createElement("div");
        button.classList = "btn flex flex-row";
        button.innerText =item.category;
        button.innerHTML =`
        <img class="w-6 " src="${item.category_icon}" alt="${item.category}" /> 
            ${item.category}  
        
        `
        

        categoricontainer.append(button);
        
    });


}

loadcategories();