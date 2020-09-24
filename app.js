const name = document.getElementById('Name');
const nameInput = document.getElementById('Name-input');
const nameButton = document.getElementById('Name-button');
const main = document.getElementById("background");
const button = document.getElementById("color-change1", "color-change2", "color-change3");


nameButton.addEventListener('click', () => {
   
    const userInput = nameInput.value;
    console.log(userInput);
    name.textContent = userInput;
});

