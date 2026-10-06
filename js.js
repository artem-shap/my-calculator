const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let text = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const value = button.dataset.value;
        const action = button.dataset.action;
    
        if (text === 'Error') {
            text = '';
        }

        if (action === 'clear') {
            text = '';
        } else if (action === 'delete') {
            text = text.slice(0, -1);
        } else if (action === 'equals') {
            try {
                text = String(eval(text));
            } catch {
                text = 'Error';
            }
        } 
        else {
            text = text + value;
        }

        display.textContent = text || '0';
    });
});