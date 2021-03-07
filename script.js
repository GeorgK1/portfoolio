const professionStr = document.querySelector("#profession-text");
const ageTag = document.querySelector("#age");
let professions = ["Student", "Web developer", "UI/UX Designer", "Programmer"];

let pChanger = function(arr){
    let current = 0;
    let fn = () => {
        if(current == professions.length) {
        setTimeout(mainLoop, 1000);
        professionStr.classList.add('pre-animation');
        return;
    }
    arr[current++];
    professionStr.innerHTML = professions[current-1];

    setTimeout(fn, 1000);
    }
setTimeout(fn, 1000);
}

let i = 0;
let mainLoop = function(){
    pChanger(professions[i]);
    professionStr.classList.remove('pre-animation');
}
mainLoop();

//My age in the website
d = new Date();
year =  d.getFullYear();
month = d.getMonth();
if(month < 6){
    age = new Date().getFullYear() - 2004
    ageTag.innerHTML = age;
} else {
  age = new Date().getFullYear() - 2003
  ageTag.innerHTML = age;
}
