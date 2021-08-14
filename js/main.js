// h2 element color
const h2Elements = document.getElementsByTagName('h2');
for (const h2 of h2Elements) {
    h2.style.color = 'skyblue';
}
//backpack section background color
document.getElementById('backpack').style.backgroundColor = '#e68c50';
//card boder radius set by js
const cards = document.querySelectorAll('.card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}
//buy now button clicked function
function clicked() {
    console.log('btn clicked');
}
//button remove by add event listener
// document.getElementById('button-container1').addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
// })
// document.getElementById('button-container2').addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
// })
// document.getElementById('button-container3').addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
// })
const allButton = document.getElementsByClassName('button-container');
for (const button of allButton) {
    button.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

// typing exact word and active button
document.getElementById('email-field').addEventListener('keyup', function (event) {
    if (event.target.value == 'email') {
        document.getElementById('submit-btn').removeAttribute('disabled');
    } else {
        document.getElementById('submit-btn').setAttribute('disabled', true);
    }
});
//Image change on Mouse enter
const bags = document.getElementsByClassName('bag-img');
for (let i = 0; i < bags.length; i++) {
    bags[i].addEventListener('mouseenter', function (event) {
        event.target.src = `images/bags/bag-${i + 1}.jpg`;
        event.target.style.borderRadius = '30px';
    })

}
for (let i = 0; i < bags.length; i++) {
    bags[i].addEventListener('mouseleave', function (event) {
        event.target.src = `images/bags/bag-${i + 1}.png`;
    })

}

// document.getElementById('bag-image1').addEventListener('mouseenter', function () {
//     const bagImage = document.getElementById('bag-image1');
//     bagImage.src = 'images/bags/bag-3.png';
// })

// document.getElementById('bag-image1').addEventListener('mouseleave', function () {
//     const bagImage = document.getElementById('bag-image1');
//     bagImage.src = 'images/bags/bag-1.png';
// })

//Subscribe section background
document.getElementById('subscribe').addEventListener('dblclick', function () {
    document.getElementById('subscribe').style.backgroundColor = '#c998e3';
})