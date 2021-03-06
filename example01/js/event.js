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
const addClass = () => LEDBox.classList.add('sparkle')
const removeClass = () => LEDBox.classList.remove('sparkle')

let clickTime = 0
let sw1Fnc
let sw2Fnc
let conut1 = 0
let conut2 = 0

function clickFnc(){
    clickTime++

    if(clickTime == 3) addList('LED() 실행'), LED() 
    else if(clickTime > 3 ) addList('clickTime 초기화')
    else addList('btn1 ' + clickTime + '번 클릭')
} 

function LED(){
    LEDfnc1()
    sw1Fnc = setInterval(LEDfnc1, 2000)

    sw_02.addEventListener('click', function(){

        clearInterval(sw1Fnc)

        addList("sw1Fnc End")

        removeClass()

        LEDfnc2()

        sw2Fnc = setInterval(LEDfnc2, 4000)

        clickTime = 0

    }, {once: true})
}

function LEDfnc1(){
    conut1++

    addList('LEDfnc1 '+conut1+'번째 start')

    addClass()
    
    setTimeout(function(){

        addList('LEDfnc1 '+conut1+'번째 end')

        removeClass()

    }, 1000)
}
function LEDfnc2(){

    conut2++

    addList('LEDfnc2 '+conut2+'번째 start')

    addClass()

    setTimeout(function(){

        addList('LEDfnc2 '+conut2+'번째 end')

        removeClass()

    }, 2000)

    if(conut2 > 4) {

        addList("sw2Fnc End")

        clearInterval(sw2Fnc)
    }
}
