const facts = [
    "Alpukat memiliki kandungan potasium yang tinggi dan dapat menurunkan kolesterol.",
    "Minum air sebelum makan dapat menurunkan Kalori yang diterima tubuh.",
    "Brokoli memiliki protein lebih banyak daripada sayuran lain.",
    "Akbar gendut Hengki Kurus."
];

let currentFact = 0;

function displayNextFact() {
    const factDisplay = document.getElementById('fact-display');
    
    factDisplay.style.opacity = '0';  
    
    setTimeout(() => {
        factDisplay.innerText = facts[currentFact];
        factDisplay.style.opacity = '1';  
        currentFact = (currentFact + 1) % facts.length;
    }, 500); 
}

setInterval(displayNextFact, 5000);

window.onload = displayNextFact;

const recipes = [
    { name: "Vegan Roti Pisang", url: "/resep/vegan1.html", img: "/Picture/vegan.jpg" },
    { name: "Penne tomat & alpukat", url: "/resep/kalori1.html", img: "/Picture/kalori.jpg" },
    { name: "Penne bayam pesto", url: "/resep/lemak1.html", img: "/Picture/lemak.jpg" },
    { name: "Ayam Jalapeño", url: "/resep/vitamin1.html", img: "/Picture/vitamin.jpg" },
    { name: "Salad Tex-Mex Ubi Jalar", url: "/resep/gluten1.html", img: "/Picture/gluten.jpg" },
    { name: "Sup brokoli & kacang", url: "/resep/protein1.html", img: "/Picture/protein.jpg" }
];

function displayRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];

    const recipeDisplay = document.getElementById('recipe-display');
    recipeDisplay.innerHTML = `
        <a href="${randomRecipe.url}" style="font-size: 28px; color: #f93030; text-decoration: none; font-weight: bold;">
            ${randomRecipe.name}
        </a>
        <br>
        <img src="${randomRecipe.img}" alt="${randomRecipe.name}" style="width: 400px; height: auto; margin-top: 20px; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    displayRandomRecipe();
    displayNextFact();
});
