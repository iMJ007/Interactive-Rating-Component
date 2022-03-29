const ratingContainer = document.querySelector('.ratingContainer');
const form = document.querySelector('form');
const thankYouContainer = document.querySelector('.thankYouContainer');
const selectedRatingSummary = document.querySelector('.selectedRatingSummary');
const radio = document.querySelectorAll('input[type="radio"]');

// console.log(ratingContainer, submitButton, thankYouContainer);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    ratingContainer.classList.toggle('hidden');
    thankYouContainer.classList.toggle('hidden');
    for (let rad of radio) {
        if(rad.checked) {
            selectedRatingSummary.innerText = `You selected ${rad.value} out of 5`;
            break;
        }   
    }
})