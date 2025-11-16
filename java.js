// --- Simple, minimal java.js ---

// Sentence processing: trim, lowercase, and show replacement
let sentence = "   Hello, World, I love JavaScript and coffee!   ";
console.log('Original:', sentence);
sentence = sentence.trim().toLowerCase();
console.log('Processed (trim + lower + replace):', sentence.replace('coffee', 'tea'));

// Product array: minimal operations and useful outputs
const products = ["laptop", "phone", "tablet", "keyboard", "mouse"];
products[2] = "smartwatch"; // replace tablet
products.push("monitor");
console.log('Products:', products);

// find first product name longer than 6 and its index
console.log('First long name and index:', products.find(p => p.length > 6), products.findIndex(p => p.length > 6));

// uppercase array, filter by letter 'o', and join into a sentence
const upperProducts = products.map(p => p.toUpperCase());
console.log('Uppercase:', upperProducts);
const oProducts = products.filter(p => p.includes('o'));
console.log('Contains "o":', oProducts);
console.log(oProducts.length ? `I have these products: ${oProducts.join(', ')}.` : 'No products with the letter "o" found.');

// small utility: square function (kept separate)
function square(a) { return a * a; }
console.log('square(5)=', square(5));

// loop kept separate in its own function
function printEvenNumbers(limit = 20) {
  for (let i = 0; i < limit; i += 2) console.log(i);
}
printEvenNumbers();

  const element = document.getElementById("bonjour");
  element.addEventListener("click", function() {
    alert("hello");
  });

  const paragraphs = [
      document.getElementById("p1"),
      document.getElementById("p2"),
      document.getElementById("p3"),
      document.getElementById("p4")
    ];

    function showParagraph(index) {
      paragraphs.forEach((p, i) => {
        p.style.display = i === index ? "block" : "none";
      });
    }

    document.getElementById("btn1").addEventListener("click", () => showParagraph(0));
    document.getElementById("btn2").addEventListener("click", () => showParagraph(1));
    document.getElementById("btn3").addEventListener("click", () => showParagraph(2));
    document.getElementById("btn4").addEventListener("click", () => showParagraph(3));