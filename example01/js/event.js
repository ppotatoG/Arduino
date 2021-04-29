function addList(t){
    let Li = document.querySelectorAll('li')

    const txtList = document.querySelector('ul.list-box')
    const liNode = document.createElement('li')
    let textNode = document.createTextNode(Li.length + ". " + t)

    txtList.appendChild(liNode)
    liNode.appendChild(textNode)
}

const LED = document.querySelector('.LED')
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
document.addEventListener('click', function(e){
    const sw_01 = e.target.name =="switch01"
    const sw_02 = e.target.name =="switch02"
    
    if((sw_01 || sw_02)){
        if (sw_01){
            clickTime++;
            addList('sw_01 '+clickTime+'번 클릭')
            if(clickTime > 2) {
                fncLED()
                console.log(e)
            }            
        }
    }
})