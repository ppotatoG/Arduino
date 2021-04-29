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

console.log(clickTime)

function fncLED(){
    LED.classList.add('duration')
    LED.classList.add('sparkle')

    setTimeout(function(){
        LED.classList.remove('duration')
        LED.classList.remove('sparkle')
        addList('sw_01 '+clickTime+'번 클릭 종료')
    }, 1000)
}
function fnc(){

    clickTime++;
    addList('sw_01 '+clickTime+'번 클릭')
    if(clickTime > 2) {
        fncLED()
        sw_02.addEventListener('click', function(){
            console.log("sw_02")
        })
    }     
}