
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';


const container = document.querySelector('.container');


container.style.height = '100vh';
container.style.margin = '0';
container.style.padding = '0';
container.style.display = 'grid';
container.style.gridTemplateColumns = '1fr 1fr';  
container.style.gridTemplateRows = '1fr 1fr';     
container.style.boxSizing = 'border-box';


let topleft_div=document.createElement("div")
topleft_div.className="topleft"
document.querySelector(".container").appendChild(topleft_div)

let bottomleft_div=document.createElement("div")
bottomleft_div.className="bottomleft"
document.querySelector(".container").appendChild(bottomleft_div)

let topright_div=document.createElement("div")
topright_div.className="topright"
document.querySelector(".container").appendChild(topright_div)

let bottomright_div=document.createElement("div")
bottomright_div.className="bottomright"
document.querySelector(".container").appendChild(bottomright_div)


topleft_div.style.gridArea='1/1/2/2'
topright_div.style.gridArea='1/2/2/3'
bottomleft_div.style.gridArea='2/1/3/2'
bottomright_div.style.gridArea='2/2/3/3'

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


topleft_div.style.backgroundColor = 'black';
topright_div.style.backgroundColor = 'black';
bottomleft_div.style.backgroundColor = 'black';
bottomright_div.style.backgroundColor = 'black';


let topleft_text = document.createElement("p");
topleft_text.textContent = "blue";
topleft_text.style.color = "black";
topleft_text.style.textAlign = "center";

let topright_text = document.createElement("p");
topright_text.textContent = "red";
topright_text.style.color = "black";
topright_text.style.textAlign = "center";

let bottomleft_text = document.createElement("p");
bottomleft_text.textContent = "purple";
bottomleft_text.style.color = "black";
bottomleft_text.style.textAlign = "center";

let bottomright_text = document.createElement("p");
bottomright_text.textContent = "white";
bottomright_text.style.color = "black";
bottomright_text.style.textAlign = "center";



topleft_div.addEventListener("mouseenter", function() {
    topleft_div.style.backgroundColor = "blue";
    topleft_div.appendChild(topleft_text);   
});

topleft_div.addEventListener("mouseleave", function() {
    topleft_div.style.backgroundColor = "black";
    if (topleft_text.parentNode) {
        topleft_div.removeChild(topleft_text);
    }
});


topright_div.addEventListener("mouseenter", function() {
    topright_div.style.backgroundColor = "red";
    topright_div.appendChild(topright_text);    
});

topright_div.addEventListener("mouseleave", function() {
    topright_div.style.backgroundColor = "black";
    if (topright_text.parentNode) {
        topright_div.removeChild(topright_text); 
    }
});

bottomleft_div.addEventListener("mouseenter", function() {
    bottomleft_div.style.backgroundColor = "purple";
    bottomleft_div.appendChild(bottomleft_text);    
});

bottomleft_div.addEventListener("mouseleave", function() {
    bottomleft_div.style.backgroundColor = "black";
    if (bottomleft_text.parentNode) {
        bottomleft_div.removeChild(bottomleft_text); 
    }
});


bottomright_div.addEventListener("mouseenter", function() {
    bottomright_div.style.backgroundColor = "white";
    bottomright_div.appendChild(bottomright_text);    
});

bottomright_div.addEventListener("mouseleave", function() {
    bottomright_div.style.backgroundColor = "black";
    if (bottomright_text.parentNode) {
        bottomright_text.removeChild(bottomright_text); 
    }
});
