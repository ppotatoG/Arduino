function addList(t){
    let Li = document.querySelectorAll('li')

    const txtList = document.querySelector('ul.list-box')
    const liNode = document.createElement('li')
    let textNode = document.createTextNode(Li.length + ". " + t)

    txtList.appendChild(liNode)
    liNode.appendChild(textNode)
}

// const sw_01 = document.querySelector('button[name=switch01]')
// const sw_02 = document.querySelector('button[name=switch02]')
const LED = document.querySelector('.LED')
let clickTime = 0;

console.log(clickTime)

document.addEventListener('click', function(e){
    const sw_01 = e.target.name =="switch01"
    const sw_02 = e.target.name =="switch02"
    console.log(clickTime)

    clickTime++;
    console. dir(e.target)

    addList(e.target.nodeName+' 클릭')
    
    if(sw_01){
        LED.classList.add('duration')
        LED.classList.add('sparkle')

        setTimeout(function(){
            LED.classList.remove('duration')
            LED.classList.remove('sparkle')
            addList('sw_01 '+clickTime+'번 클릭 종료')
        }, 1000)
        if (this.name =="switch02") console.log("??")
    }  
})
// else if(sw_02) {
//     for(let i = 0 ; i < 6 ; i++){
//         LED.classList.add('duration')
//         LED.classList.add('sparkle')
//         setTimeout(function(){
//             LED.classList.remove('duration')
//             LED.classList.remove('sparkle')
//             addList('LED sparkle 5번 종료')
//         }, 1000)
//         console.log(i+"번 째")
//     }
// }