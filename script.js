// Reset body defaults
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';


const main = document.querySelector('.main');

// Make the main container take the full viewport and act as a grid container
main.style.height = '100vh';
main.style.margin = '0';
main.style.padding = '0';
main.style.display = 'grid';
main.style.gridTemplateColumns = '1fr 1fr';  // two equal columns
main.style.gridTemplateRows = '1fr 1fr';     // two equal rows
main.style.gap = '0px';                      // no gap between quadrants (change if you want spacing)
main.style.boxSizing = 'border-box';

// define the four divisions
let topleft_div=document.createElement("div")
topleft_div.className="topleft"
document.querySelector(".main").appendChild(topleft_div)

let bottomleft_div=document.createElement("div")
bottomleft_div.className="bottomleft"
document.querySelector(".main").appendChild(bottomleft_div)

let topright_div=document.createElement("div")
topright_div.className="topright"
document.querySelector(".main").appendChild(topright_div)

let bottomright_div=document.createElement("div")
bottomright_div.className="bottomright"
document.querySelector(".main").appendChild(bottomright_div)



// Now position each div in its correct quadrant using JS
// the format is grid row start/grid column start/grid row end/grid column end
topleft_div.style.gridArea='1/1/2/2'
topright_div.style.gridArea='1/2/2/3'
bottomleft_div.style.gridArea='2/1/3/2'
bottomright_div.style.gridArea='2/2/3/3'

//all division are now styled
topleft_div.style.display = "flex";
topleft_div.style.justifyContent = "center";
topleft_div.style.alignItems = "center";

topright_div.style.display = "flex";
topright_div.style.justifyContent = "center";
topright_div.style.alignItems = "center";

bottomleft_div.style.display = "flex";
bottomleft_div.style.justifyContent = "center";
bottomleft_div.style.alignItems = "center";

bottomright_div.style.display = "flex";
bottomright_div.style.justifyContent = "center";
bottomright_div.style.alignItems = "center";

// Set initial state: white background, no text
topleft_div.style.backgroundColor = 'white';
topright_div.style.backgroundColor = 'white';
bottomleft_div.style.backgroundColor = 'white';
bottomright_div.style.backgroundColor = 'white';

// Create the text element (but don't add it yet)
let topleft_text = document.createElement("p");
topleft_text.textContent = "This has red background color";
topleft_text.style.color = "white";
topleft_text.style.textAlign = "center";

let topright_text = document.createElement("p");
topright_text.textContent = "This has blue background color";
topright_text.style.color = "white";
topright_text.style.textAlign = "center";

let bottomleft_text = document.createElement("p");
bottomleft_text.textContent = "This has yellow background color";
bottomleft_text.style.color = "white";
bottomleft_text.style.textAlign = "center";

let bottomright_text = document.createElement("p");
bottomright_text.textContent = "This has green background color";
bottomright_text.style.color = "white";
bottomright_text.style.textAlign = "center";


// Add hover effect using mouse events

//for top-left

topleft_div.addEventListener("mouseenter", function() {
    topleft_div.style.backgroundColor = "red";
    topleft_div.appendChild(topleft_text);    // show text
});

topleft_div.addEventListener("mouseleave", function() {
    topleft_div.style.backgroundColor = "white";
    if (topleft_text.parentNode) {
        topleft_div.removeChild(topleft_text); // hide text
    }
});

//for top-right

topright_div.addEventListener("mouseenter", function() {
    topright_div.style.backgroundColor = "blue";
    topright_div.appendChild(topright_text);    // show text
});

topright_div.addEventListener("mouseleave", function() {
    topright_div.style.backgroundColor = "white";
    if (topright_text.parentNode) {
        topright_div.removeChild(topright_text); // hide text
    }
});

//for bottom-left

bottomleft_div.addEventListener("mouseenter", function() {
    bottomleft_div.style.backgroundColor = "yellow";
    bottomleft_div.appendChild(bottomleft_text);    // show text
});

bottomleft_div.addEventListener("mouseleave", function() {
    bottomleft_div.style.backgroundColor = "white";
    if (bottomleft_text.parentNode) {
        bottomleft_div.removeChild(bottomleft_text); // hide text
    }
});

//for bottom-right

bottomright_div.addEventListener("mouseenter", function() {
    bottomright_div.style.backgroundColor = "green";
    bottomright_div.appendChild(bottomright_text);    // show text
});

bottomright_div.addEventListener("mouseleave", function() {
    bottomright_div.style.backgroundColor = "white";
    if (bottomright_text.parentNode) {
        bottomright_text.removeChild(bottomright_text); // hide text
    }
});
