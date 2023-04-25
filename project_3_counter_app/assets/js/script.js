
const   add         = document.querySelector(".add");
const   subtract    = document.querySelector(".subtract");
const   reset       = document.querySelector(".reset");

add.addEventListener("click", addFunction);
subtract.addEventListener("click", subtractFunction);
reset.addEventListener("click", resetFunction);

function addFunction(e){
    e.preventDefault();

    let counter = document.querySelector(".counter").innerHTML;
    counter = parseInt(counter);
    ++counter;
    document.querySelector(".counter").innerHTML = counter;
}

function subtractFunction(e) {
    e.preventDefault();

    let counter = document.querySelector(".counter").innerHTML;
    counter = parseInt(counter);
    --counter;
    document.querySelector(".counter").innerHTML = counter;
}

function resetFunction(e){
    e.preventDefault();

    document.querySelector(".counter").innerHTML = 0;
}