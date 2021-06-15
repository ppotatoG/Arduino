# arduino example01

아두이노 우노를 이용하여, LED 1개와 Switch 2개를 사용하여 회로를 구성한 후 다음의 프로그램을 작성하세요.
1. 스위치1을 3회 누르면, LED가 1초 간격으로 On/Off를 반복하는 프로그램을 작성하세요.
2. 위와 같이 On/Off를 반복하는 동작 중 스위치2를 누르면, LED가 2초 간격으로 5회 On/Off를 반복하는 프로그램을 작성하세요. 5회가 끝난 후에는 LED는 Off 시키세요.

<br>

### event 발생 시 list-box에 t 추가
```
function addList(t){
    let Li = document.querySelectorAll('li')

    const txtList = document.querySelector('ul.list-box')
    const liNode = document.createElement('li')
    let textNode = document.createTextNode(Li.length + ". " + t)

    txtList.appendChild(liNode)
    liNode.appendChild(textNode)
}
```
<br>

### setTimeout으로 일정 시간동안 class add, remove
```
setTimeout(function(){

    addList('LEDfnc2 '+conut2+'번째 end')

    removeClass()

}, 2000)
```
<br>

### setTimeout을 setInterval으로 반복
```
sw2Fnc = setInterval(LEDfnc2, 4000)
```
<br>

### clearInterval으로 함수 종료
```
clearInterval(sw1Fnc)
```