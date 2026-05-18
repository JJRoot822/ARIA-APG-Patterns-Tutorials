let toggleAIToolsButton= document.getElementById("enable-ai-btn");

function isPressed(element) {
    return element.getAttribute("aria-pressed") === "true";
}

function togglePressed(element) {
    let pressed = isPressed(element);

    element.setAttribute("aria-pressed", `${!pressed}`)
}

function isDisabled(element) {
    let disabled = element.getAttribute("aria-disabled");

    if (!disabled || disabled === "false") {
        return false;
    }

    return true;
}

function handleClick(element) {
    togglePressed(element);
}

toggleAIToolsButton.addEventListener('click', (event) => {
    if (!isDisabled(event.currentTarget)) {
        handleClick(event.currentTarget);
    }
});

toggleAIToolsButton.addEventListener('keydown', (event) => {
    if (event.key ==="Enter") {
        if (!isDisabled(event.currentTarget)) {
            handleClick(event.currentTarget);
        }
    }
});

toggleAIToolsButton.addEventListener('keyup', (event) => {
    if (event.key === "Space") {
        event.preventDefault();
        if (!isDisabled(event.currentTarget)) {
            handleClick(event.currentTarget);
        }
    }
});