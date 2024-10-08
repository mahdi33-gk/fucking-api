const loadcategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res) => res.json())
    .then(data => displaycategories(data.categories)) 
}

const displaycategories = (categories) => {
    const categoricontainer = document.getElementById('post-container')
    categories.forEach(item => {
        console.log(item)

        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText =item.category;
        button.innerHTML =`
        <img
        src="${item.category_icon} ${item.category} "  
        />
        `
        

        categoricontainer.append(button);
        
    });


}

loadcategories();