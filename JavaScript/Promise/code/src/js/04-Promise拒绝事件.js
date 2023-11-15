// Promise拒绝事件（用于全局兜底Promise拒绝未处理情况）
// unhandledrejection:当 Promise 被拒绝，但没有提供 reject 函数来处理该拒绝事件时，会派发此事件。

window.addEventListener('unhandledrejection', () => {
  alert('触发unhandledrejection事件')
})

function f1(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      reject(new Error('Promise was rejected'))
    }, 1000);
  })
}

document.querySelector('.btn4').addEventListener('click', f1)
