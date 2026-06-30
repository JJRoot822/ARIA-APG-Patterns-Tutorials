let executeButton = document.getElementById("execute-order-btn");

function isDisabled(button) {
    return button.getAttribute("aria-disabled") === "true";
}

function isPressed(button) {
    return button.getAttribute("aria-pressed") === "true";
}

function togglePressed(button) {
    if (isPressed(button)) {
        button.setAttribute("aria-pressed", String(false));
    } else {
        button.setAttribute("aria-pressed", String(true));
    }
}

executeButton.addEventListener('click', (event) => {
    if (!isDisabled(event.currentTarget)) {
        togglePressed(event.currentTarget);
}
});

executeButton.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        if (!isDisabled(event.currentTarget)) {
            togglePressed(event.currentTarget);
}
    }
});

executeButton.addEventListener('keyup', (event) => {
    if (event.key === "Space") {
        event.preventDefault();

        if (!isDisabled(event.currentTarget)) {
            togglePressed(event.currentTarget);
        }
    }
});

