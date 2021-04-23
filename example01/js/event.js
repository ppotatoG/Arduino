function addList(t){
    let Li = document.querySelectorAll('li')

    const txtList = document.querySelector('ul.list-box')
    const liNode = document.createElement('li')
    let textNode = document.createTextNode(Li.length + t)

    txtList.appendChild(liNode)
    liNode.appendChild(textNode)
}

const sw_01 = document.querySelector('button[name=switch01]')
const sw_02 = document.querySelector('button[name=switch02]')


sw_01.addEventListener('click', function(){
    addList('클릭')
})