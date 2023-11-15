import {addText} from './utils'

// 3. catch的后续链式操作
// then 和 catch 默认 return undefined
function fn(){
  new Promise((resolve, reject) => {
    addText("初始化");
  
    resolve();
  })
    .then(() => {
      throw new Error("有哪里不对了");
  
      addText("执行「这个」");
    })
    .catch(() => {
      addText("执行「那个」");
    })
    .then(() => {
      throw new Error('又出错了')
      addText("执行「这个」，无论前面发生了什么");
    })
    .catch(() => {
      addText("执行 omg")
    })
}

document.querySelector('.btn3').addEventListener('click', fn)