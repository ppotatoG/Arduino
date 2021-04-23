function addList(t){
    let Li = document.querySelectorAll('li')
    for(i = 0; i < Li.length; i++){
        console.dir(Li[i])
        let listNum=i+1

        const txtList = document.querySelector('ul.list-box')
        const liNode = document.createElement('li')
        let textNode = document.createTextNode(listNum + t)

        txtList.appendChild(liNode)
        liNode.appendChild(textNode)
    }    
}

addList('메롱');