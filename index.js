
function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  var element = document.querySelector('#nested div.target');
  return element;
}

function increaseRankBy(n) {
  var element = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < element.length; i++) {
    element[i].innerHTML = parseInt(element[i].innerHTML) + n;
    }
}

function deepestChild() {
  var element = document.getElementById('grand-node').querySelectorAll('div');
  return element[element.length-1];
}
