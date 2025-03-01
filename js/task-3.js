const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {

    console.log(event.target.value);
    
    const trimmedValue = event.target.value.trim();
    nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
