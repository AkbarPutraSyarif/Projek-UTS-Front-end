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