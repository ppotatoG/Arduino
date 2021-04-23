function addList(t){
    let Li = document.querySelectorAll('li')

    const txtList = document.querySelector('ul.list-box')
    const liNode = document.createElement('li')
    let textNode = document.createTextNode(Li.length + ". " + t)

    txtList.appendChild(liNode)
    liNode.appendChild(textNode)
}

const sw_01 = document.querySelector('button[name=switch01]')
const sw_02 = document.querySelector('button[name=switch02]')
const LED = document.querySelector('.LED')

sw_01.addEventListener('click', function(){
    addList('sw_01 클릭')
    LED.classList.add('duration')
    LED.classList.add('Sparkle')
    setTimeout(function(){
        LED.classList.remove('duration')
        LED.classList.remove('Sparkle')
    }, 1000)    
})

sw_02.addEventListener('click', function(){
    addList('sw_02 클릭')
})