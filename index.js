const emojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushButton = document.getElementById("push-btn");
const unshiftButton = document.getElementById("unshift-btn");
const popButton = document.getElementById("pop-btn");
const shiftButton = document.getElementById("shift-btn");



function renderEmojis() {
    emojiContainer.innerHTML = "";
    for (let i = 0; i < emojis.length; i++) {
        const emojiElement = document.createElement('span');
        emojiElement.textContent = emojis[i];
        emojiContainer.append(emojiElement);
    }
}

renderEmojis();


function modifyEmoji(operation) {
    if(operation === "push" || operation === "unshift") {
        if(emojiInput.value) {
            emojis[operation](emojiInput.value);
            emojiInput.valute = "";
            renderEmojis();
        }
        
    }

    else if (operation === "pop" || operation === "shift") {
        if(emojiInput.value) {
            emojis[operation](emojiInput.value);
            renderEmojis();
          
        }
    }

}

pushButton.addEventListener("click", function() {
    modifyEmoji("push");
});

unshiftButton.addEventListener("click", function() {
    modifyEmoji("unshift");
});
popButton.addEventListener("click", function() {
  
    modifyEmoji("pop");
});
shiftButton.addEventListener("click", function() {
    modifyEmoji("shift");
});
