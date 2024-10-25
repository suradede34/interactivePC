const pageViewRange = document.getElementById('pageViewRange');
const pageViews = document.getElementById('pageViews');

function handlePageViewChange() {
	pageViews.innerText = pageViewRange.value;
}

pageViewRange.addEventListener('input', handlePageViewChange);




const toggleButton = document.getElementById('toggleButton');
const container = document.querySelector('.header');

function toggleBackgroundColor() {
    if (container.style.backgroundColor === 'white') {
        container.style.backgroundColor = '#10D8C4';
    } else {
        container.style.backgroundColor = 'white'; 
    }
}

toggleButton.addEventListener('click', toggleBackgroundColor);
