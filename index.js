function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild() {
  const grandNode = document.querySelectorAll('#grand-node div')
  return grandNode[grandNode.length - 1]
}

deepestChild()

function increaseRankBy(n) {
  const listItems = document.querySelectorAll('.ranked-list li')
  for (let li of listItems){
    li.innerHTML = String(Number(li.innerHTML) + n)
  }
}
