function addList(t){
    let Li = document.querySelectorAll('li')

    const txtList = document.querySelector('ul.list-box')
    const liNode = document.createElement('li')
    let textNode = document.createTextNode(Li.length + ". " + t)

    txtList.appendChild(liNode)
    liNode.appendChild(textNode)
}

const LEDBox = document.querySelector('.LED')
const sw_02 = document.querySelector('button[name=switch02]')

let clickTime = 0;

function clickFnc(){
    clickTime++;
    if(clickTime == 3) {
        addList('glwLED() 실행')
        LED()
    }
    else if(clickTime > 3 ) {
        return false;
    }
    else {
        addList('btn1 ' + clickTime + '번 클릭')
    }
} 
let sw1Fnc
let sw2Fnc
function LED(){
    LEDBox.classList.add('duration')
    LEDBox.classList.add('sparkle')

    setTimeout(function(){
        LEDBox.classList.remove('duration')
        LEDBox.classList.remove('sparkle')
    }, 1000)

    sw_02.addEventListener('click', function(){
        addList('btn2 click')
        LEDfnc2();
        sw2Fnc = setInterval(LEDfnc2, 4000);
    }, {once: true})
}

let conut = 0;
function LEDfnc2(){
    conut++
    addList(conut+'번째 setInterval')

    LEDBox.classList.add('duration')
    LEDBox.classList.add('sparkle')
    setTimeout(function(){
        addList('setTimeout')
        LEDBox.classList.remove('duration')
        LEDBox.classList.remove('sparkle')
    }, 2000)

    if(conut > 4) {
        addList("clearInterval")
        clearInterval(sw2Fnc)
    }
}
