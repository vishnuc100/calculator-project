let display = document.getElementById("display");

// 🎯 Add Event Listeners to All Buttons
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.getAttribute("data-value");
        let action = button.getAttribute("data-action");

        if (value) {
            display.value += value;
        }

        if (action === "clear") {
            display.value = "";
        }

        if (action === "delete") {
            display.value = display.value.slice(0, -1);
        }

        if (action === "calculate") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
    });
});

// 🎯 Keyboard Support
document.addEventListener("keydown", event => {
    let key = event.key;

    // Numbers & dot
    if (!isNaN(key) || key === ".") {
        display.value += key;
    }

    // Operators
    if (["+","-","*","/"].includes(key)) {
        display.value += key;
    }

    // Enter = calculate
    if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    // Backspace = delete
    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Esc = clear
    if (key === "Escape") {
        display.value = "";
    }
});
