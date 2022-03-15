//VARIABLES

const panels = document.querySelectorAll('.panel');



//FUNCTIONS

//toggle .active class in panel element
panels.forEach(panel => {
    
    panel.addEventListener('click', () => {
        removeActive()
        panel.classList.add('active');
    })
});


//delete .active class from all panels
function removeActive() {
    panels.forEach(panel => {
    panel.classList.remove('active');
})
}
