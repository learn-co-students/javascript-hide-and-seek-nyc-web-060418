function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}

function increaseRankBy(n) {

  const rankedLists = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankedLists.length; i++) {
    debugger
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  const array = document.querySelectorAll('#grand-node div')
  return array[array.length - 1]
}
