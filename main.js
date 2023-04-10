let hideTextBtn = document.getElementById('hideTextBtn');
let hideText = document.getElementById('hideText');

hideTextBtn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
   
}

hideTextBtn.addEventListener('click', function(){
    hideTextBtn.style.display = 'none';
})

