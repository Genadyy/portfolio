const pointPhoto = document.querySelector('.welcome-section-img');
const presentation = document.querySelector('.presentation');

function startPresentation() {
    pointPhoto.addEventListener('click', () => {
        hidePhoto();
        showPresentation();
})
};

startPresentation();
stopPresentation();

function hidePhoto() {
    pointPhoto.classList.add('hide');
};

function showPresentation() {
presentation.classList.add('show');
insertPresentation();
};

const itemPresentation = `
<div class="wrap-presentation">
    <video src="./images/presentation.mp4" autoplay="autoplay" width="100%" heght="60%" ></video>
</div>
`

function insertPresentation() {
    presentation.innerHTML = itemPresentation;
};

function stopPresentation() {
    presentation.addEventListener('click', () => {
        hidePresentation();
        showPhoto();
    })
 };

 function hidePresentation() {
     presentation.classList.remove('show');
 };

 function showPhoto() {
     pointPhoto.classList.remove('hide');
 };