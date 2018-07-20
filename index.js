function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  const nested = document.getElementById('nested')
  return nested.getElementsByClassName('target')[0]
}

function increaseRankBy(n){
  for (let el of document.querySelectorAll('main#app ul.ranked-list li')){
    let intEl = parseInt(el.innerHTML);
    el.innerHTML = intEl + n
    }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div')
  }
