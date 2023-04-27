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

function addEmoji(operation) {
    if (emojiInput.value) {
        emojis[operation](emojiInput.value);
        emojiInput.value = "";
        renderEmojis();
    }
}

renderEmojis();

pushButton.addEventListener("click", function() {
    addEmoji("push");
});


unshiftButton.addEventListener("click", function() {
    addEmoji("unshift");
});
popButton.addEventListener("click", function() {
    emojis.pop();
    renderEmojis();
});
shiftButton.addEventListener("click", function() {
    emojis.shift();
    renderEmojis();
});
