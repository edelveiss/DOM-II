// Your code goes here
//-------------------------------------------------------
//1.Intro Bus image
//mouseenter
let imgIntro = document.querySelector("header img");

imgIntro.addEventListener('mouseenter', (e) => {
        imgIntro.style.transform = 'scale(1.3)';
        imgIntro.style.opacity = "0";
        imgIntro.style.transitionDuration = '2s';
    })
    //-------------------------------------------------------
    //2.Intro Bus image
    //mouseleave
imgIntro.addEventListener('mouseleave', (e) => {
        imgIntro.style.transform = 'scale(1)';
        imgIntro.style.opacity = "1";
    })
    //-------------------------------------------------------
    //3.First Image Content
    //click
let imgContent = document.querySelectorAll(".img-content");
imgContent[0].addEventListener('click', (e) => {
    imgContent[0].style.transform = 'skewY(20deg)';
    imgContent[0].style.transitionDuration = '2s';

})
imgContent[0].addEventListener('mouseleave', (e) => {
    imgContent[0].style.transform = 'scale(1)';
})

//-------------------------------------------------------
//4.Second Image Content
//dblclick

imgContent[1].addEventListener('dblclick', (e) => {

    imgContent[1].style.filter = 'grayscale(100%)';
    imgContent[1].style.transitionDuration = '2s';

})
imgContent[1].addEventListener('mouseleave', (e) => {
        imgContent[1].style.filter = 'grayscale(0%)';
    })
    //-------------------------------------------------------
    //5.content-destination image
    //wheel
let imgDestination = document.querySelector(".content-destination img");

imgDestination.addEventListener('wheel', (e) => {
    imgDestination.style.filter = 'blur(4px)';
    imgDestination.style.transitionDuration = '2s';
})


imgDestination.addEventListener('mouseleave', (e) => {
    imgDestination.style.filter = 'blur(0)';

})

//-------------------------------------------------------
//6.class destination
//mouseover
let contentPick = document.querySelector(".content-pick");

contentPick.addEventListener('mouseover', (e) => {
    contentPick.children[0].style.color = "orange";
    contentPick.children[1].style.color = "pink";
    contentPick.children[2].style.color = "red";
    setTimeout(function() {
        contentPick.children[0].style.color = "";
        contentPick.children[1].style.color = "";
        contentPick.children[2].style.color = "";
    }, 500);

});

//-------------------------------------------------------
//7.body
//keydown
let body = document.querySelector("body");


body.addEventListener("keydown", event => {
    if (event.key == "d") {
        document.body.style.background = "blue";
    }
});
//-------------------------------------------------------
//8.body
//keyup
body.addEventListener("keyup", event => {
    if (event.key == "u") {
        document.body.style.background = "";
    }
});
//-----------------------------------------------------
//9.window, Adventure Awaits
const imgFluid = document.querySelector('.img-fluid');
window.addEventListener("resize", () => {
    imgFluid.src = "img/paris.jpg";
})

//GreenSock Animation
var tl = gsap.timeline();

imgFluid.addEventListener("click", event => {

    tl.to(imgFluid, { x: 500, y: -100, scale: 2, rotation: 360, opacity: 0.5, duration: 3 })
        .to(imgFluid, { x: 0, y: 0, scale: 1, opacity: 1, duration: 3, rotation: -360, exactly: "+=2" });;

})


//-------------------------------------------------------
//9.class intro
//drag
let h2Intro = document.querySelector(".intro h2");
let intro = document.querySelector('.intro');
let newh2 = document.createElement("h2");

newh2.textContent = " ";
newh2.style.width = "350px";
newh2.style.height = "100px";
newh2.style.background = "pink";
newh2.style.border = "1px solid blue";


newh2.setAttribute('class', 'dropzone');
h2Intro.setAttribute("draggable", "true");
document.addEventListener('drag', (e) => {

        intro.appendChild(newh2);

    })
    //10.class intro
    //dragstart
document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
}, false);
//11.class intro
//dragend
document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);
//12.class intro
//dragover
/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
}, false);
//13.class intro
//dragenter
document.addEventListener("dragenter", function(event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className == "dropzone") {
        event.target.style.background = "yellow";
    }

}, false);
//14.class intro
//dragleave
document.addEventListener("dragleave", function(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }

}, false);
//15.class intro
//drop
document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);

//Additional practice with NodeList and HTML Collection
const a = document.getElementsByTagName('a');
console.log(a);
const gallery = document.createElement('a');
gallery.classList.add('nav-link');
gallery.textContent = "Gallery";

const login = document.createElement("a");
login.classList.add('nav-link');
login.textContent = "Login";
// document.querySelector('nav').append(login);

const nav = document.querySelector('nav');
nav.insertBefore(gallery, nav.children[2]);
nav.append(login);


const a1 = document.getElementsByTagName('a');
console.log("this is new a ", a1);
const aArr = Array.from(a1).map(element => element.style.color = "green");

//--------------------------------------------
// Stop the navigation items from refreshing the page by using `preventDefault()`



const links = document.querySelectorAll('.nav-link')
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('stopped!')
        link.style.color = 'blue'
        event.preventDefault();

    })
})




//-------------------------------------------------------
//Nest two similar events somewhere in the site and prevent the event propagation properly

const textContentGr = document.querySelector(".text-content");
console.log(textContentGr);
console.log(textContentGr.children[0]);
textContentGr.addEventListener("click", () => {
    textContentGr.style.background = "orange";
});
textContentGr.children[0].addEventListener("click", (e) => {
    textContentGr.children[0].style.background = "brown";
    e.stopPropagation();
})