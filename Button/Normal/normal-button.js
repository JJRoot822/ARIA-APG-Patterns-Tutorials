let executeButton = document.getElementById("execute-order-btn");
let cancelButton = document.getElementById("cancel-order-btn");

function isDisabled(button) {
    return button.getAttribute("aria-disabled") === "true";
}

executeButton.addEventListener('click', (event) => {
    if (!isDisabled(event.currentTarget)) {
        alert("Order 66 Executed, my lord.");
    }
});

cancelButton.addEventListener('click', (event) => {
    if (!isDisabled(event.currentTarget)) {
        alert("Order 66 cancelled, my lord.");
    }
});

executeButton.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        if (!isDisabled(event.currentTarget)) {
            alert("Order 66 Executed, my lord.");
        }
    }
});

cancelButton.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        if (!isDisabled(event.currentTarget.currentTarget)) {
            alert("Order 66 cancelled, my lord.");
        }
    }
});

executeButton.addEventListener('keyup', (event) => {
    if (event.key === "Space") {
        event.preventDefault();

        if (!isDisabled(event.currentTarget)) {
            alert("Order 66 Executed, my lord.");
        }
    }
});

cancelButton.addEventListener('keyup', (event) => {
    if (event.key === "Space") {
        event.preventDefault();

        if (!isDisabled(event.currentTarget)) {
            alert("Order 66 cancelled, my lord.");
        }
    }
})