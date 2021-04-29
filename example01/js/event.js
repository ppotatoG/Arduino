function addList(t){
    let Li = document.querySelectorAll('li')

    const txtList = document.querySelector('ul.list-box')
    const liNode = document.createElement('li')
    let textNode = document.createTextNode(Li.length + ". " + t)

    txtList.appendChild(liNode)
    liNode.appendChild(textNode)
}

const LED = document.querySelector('.LED')
const sw_02 = document.querySelector('button[name=switch02]')

let clickTime = 0;

function swClickFnc(){
    clickTime++;
    addList('btn1 ' + clickTime + '번 클릭')
    if(clickTime > 2) glwLED()   
} 

function glwLED(){
    LED.classList.add('duration')
    LED.classList.add('sparkle')

    setTimeout(function(){
        LED.classList.remove('duration')
        LED.classList.remove('sparkle')
    }, 1000)
    sw_02.addEventListener('click', function(){
        addList('btn2 click')
        repeatGlwLED();
        sw2ClickFnc = setInterval(repeatGlwLED, 4000);
    })
}

let sw2ClickFnc
let conut = 0;
function repeatGlwLED(){
    conut++
    addList(conut+'번째 setInterval')

    LED.classList.add('duration')
    LED.classList.add('sparkle')
    setTimeout(function(){
    addList('setTimeout')
        LED.classList.remove('duration')
        LED.classList.remove('sparkle')
    }, 2000)

    if(conut > 4) {
        addList("clearInterval")
        clearInterval(sw2ClickFnc)
    }
}
