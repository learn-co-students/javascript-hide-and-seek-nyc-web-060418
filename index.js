function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
   let deepestNode = document.querySelectorAll('#grand-node div')

   return deepestNode[deepestNode.length - 1]
}

function increaseRankBy(n){
  let rankedList = document.querySelectorAll('.ranked-list')

  let rankedListElements = rankedList.forEach(function(el, i, obj){
    let li = el.querySelectorAll('li')
    li.forEach(function(el){
      let num = Number(el.innerHTML)
      el.innerHTML = num + n;
    })
  })

}
