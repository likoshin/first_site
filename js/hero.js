document.getElementById("open-ford-btn").addEventListener("click",function(){
    document.getElementById("ford-modal").classList.add("open")
})

document.getElementById("close-ford").addEventListener("click",function(){
    document.getElementById("ford-modal").classList.remove("open")
})

document.querySelector("#ford-modal .ford_modal").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("ford-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})


document.getElementById("open-camaro-btn").addEventListener("click",function(){
    document.getElementById("camaro-modal").classList.add("open")
})

document.getElementById("close-camaro").addEventListener("click",function(){
    document.getElementById("camaro-modal").classList.remove("open")
})

document.querySelector("#camaro-modal .camaro_modal").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("camaro-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})

document.getElementById("open-mers-btn").addEventListener("click",function(){
    document.getElementById("mers-modal").classList.add("open")
})

document.getElementById("close-mers").addEventListener("click",function(){
    document.getElementById("mers-modal").classList.remove("open")
})

document.querySelector("#mers-modal .mers_modal").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("mers-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})

document.getElementById("open-volvo-btn").addEventListener("click",function(){
    document.getElementById("volvo-modal").classList.add("open")
})

document.getElementById("close-volvo").addEventListener("click",function(){
    document.getElementById("volvo-modal").classList.remove("open")
})

document.querySelector("#volvo-modal .volvo_modal").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("volvo-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
})