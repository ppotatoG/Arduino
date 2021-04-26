function addList(t){
    let Li = document.querySelectorAll('li')

    const txtList = document.querySelector('ul.list-box')
    const liNode = document.createElement('li')
    let textNode = document.createTextNode(Li.length + ". " + t)

    txtList.appendChild(liNode)
    liNode.appendChild(textNode)
}

const warp = document.querySelector("#wrap");
const sw_01 = document.querySelector('button[name=switch01]');
const sw_02 = document.querySelector('button[name=switch02]');
const LED = document.querySelector('.LED');
let clickTime = 0;

// sw_01.addEventListener('click', function(){
//     clickTime++;

//     addList('sw_01 '+clickTime+'번 클릭')

//     if(clickTime > 2){
//         LED.classList.add('duration')
//         LED.classList.add('sparkle')
//         setTimeout(function(){
//             LED.classList.remove('duration')
//             LED.classList.remove('sparkle')
//             addList('sw_01 '+clickTime+'번 클릭 종료')
//         }, 1000)
//     }    
// })


// sw_02.addEventListener('click', function(){
//     addList('sw_02 클릭')
// })

warp.addEventListener('click', function(e){
    if(e.target.name =="switch01"){
        clickTime++;
        addList('sw_01 '+clickTime+'번 클릭')
        console.log('e.target.name =="switch01"')
        if(clickTime >= 3){
            LED.classList.add('duration')
            LED.classList.add('sparkle')

            console.log('clickTime >= 3')

            setTimeout(function(){
                LED.classList.remove('duration')
                LED.classList.remove('sparkle')
                addList('sw_01 '+clickTime+'번 클릭 종료')
            }, 1000)
            
            console.log(e.target)
        } else false
    }
})