let checkoutButton = document.getElementById("checkout-btn");

function isDisabled(element) {
    let disabled = element.getAttribute("aria-disabled");

    if (!disabled || disabled === "false") {
        return false;
    }

    return true;
}

function handleClick() {
    alert("Button clicked!");
}

checkoutButton.addEventListener('click', (event) => {
    if (!isDisabled(event.currentTarget)) {
        handleClick();
    }
});

checkoutButton.addEventListener('keydown', (event) => {
    if (event.key ==="Enter") {
        if (!isDisabled(event.currentTarget)) {
            handleClick();
        }
    }
});

checkoutButton.addEventListener('keyup', (event) => {
    if (event.key === "Space") {
        event.preventDefault();
        if (!isDisabled(event.currentTarget)) {
            handleClick();
        }
    }
});