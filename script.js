const pointPhoto = document.querySelector('.welcome-section-img');
const presentation = document.querySelector('.presentation');

function startPresentation() {
    pointPhoto.addEventListener('click', () => {
        hidePhoto();
        showPresentation();
        endPresentation();
})
};

startPresentation();

function hidePhoto() {
    pointPhoto.classList.add('hide');
};

function showPresentation() {
presentation.classList.add('show');
insertPresentation();
};

const itemPresentation = `
<div class="wrap-presentation">
    <video src="./images/presentation.mp4" autoplay="autoplay"></video>
</div>
`;

const emptyPresentation = `
<div></div>
`

function insertPresentation() {
    presentation.innerHTML = itemPresentation;
};

function endPresentation() {
    setTimeout(function() {
        hidePresentation();
        showPhoto();
    }, 5000)
};

 function hidePresentation() {
     presentation.classList.remove('show');
     presentation.innerHTML = emptyPresentation;
 };

 function showPhoto() {
     pointPhoto.classList.remove('hide');
 };