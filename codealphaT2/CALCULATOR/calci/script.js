function clearDisplay() {
    document.getElementById('display').innerText = '';
    sprinkleEffect(event);
}

function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
    sprinkleEffect(event);
}

function calculate() {
    try {
        const display = document.getElementById('display');
        display.innerText = eval(display.innerText);
        sprinkleEffect(event);
    } catch {
        alert('Invalid expression');
    }
}

function sprinkleEffect(event) {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const sprinkle = document.createElement('div');
    sprinkle.className = 'sprinkle heart';
    sprinkle.style.left = `${event.clientX - rect.left - 10}px`;
    sprinkle.style.top = `${event.clientY - rect.top - 10}px`;
    button.appendChild(sprinkle);
    setTimeout(() => {
        sprinkle.remove();
    }, 600);
}
