import { fetchNum, addText } from './utils'

function fn (){
  // 1. 链式调用(避免回调地狱)
  // 一个好的经验法则是总是return或catch Promise 链，避免报错
  fetchNum(0)
    .then((result) => {
      return fetchNum(result)
    })
    .then((result) => {
      return fetchNum(result)
    })
    .catch(() => {
      // do something
    })
}

document.querySelector('.btn1').addEventListener('click', fn)


  