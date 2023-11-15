import { addText } from './utils'
function f1(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('p1 成功')
    }, 2000)
  })
}

function f2(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('p2 成功')
    }, 1000)
  })
}

function f3(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('p3 成功')
    }, 3000)
  })
}

function fail(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('fail 失败')
    }, 1000)
  })
}

function fail2(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('fail 失败')
    }, 2000)
  })
}

// 1. Promise.all(): 全部成功以数组形式返回结果，失败返回第一个错误结果
document.querySelector('.btn5').addEventListener('click', () => {
  // 成功
  Promise.all([f1(), f2(), f3()])
    .then(([r1, r2, r3]) => {
      addText(r1)
      addText(r2)
      addText(r3)
    })
  
  // 失败
  /* Promise.all([f1(), f2(), f3(), fail()])
    .then(([r1, r2, r3]) => {
      addText(r1)
      addText(r2)
      addText(r3)
    })
    .catch(e => {
      addText(e)
    }) */
})

// 2. Promise.allSettled(): 无论成功失败，以{status: '', value: ''}[]对象数组形式返回结果
document.querySelector('.btn6').addEventListener('click', () => {
  // 成功
  Promise.allSettled([f1(), f2(), f3(), fail()])
    .then((results) => {
      results.forEach(r => {
        addText(JSON.stringify(r))
      })
    })
  
})

// 3. Promise.any(): 返回第一个成功结果，全部失败,返回原因数组
document.querySelector('.btn7').addEventListener('click', () => {
  // 成功
  Promise.any([f1(), f2(), f3(), fail()])
    .then((result) => {
      addText(result)
    })
  
  // 失败
  /* Promise.all([fail(), fail2()])
    .then((result) => {
      addText(r1)
    })
    .catch(e => {
      console.log(e)
      addText(e)
    }) */
})

// 3. Promise.race(): 根据第一个异步结果决定状态, 并返回结果
document.querySelector('.btn8').addEventListener('click', () => {
  // 成功
  /* Promise.race([f1(), f2(), f3()])
    .then((result) => {
      addText(result)
    }) */
  
  // 失败
  Promise.race([f1(), f3(), fail()])
    .then((result) => {
      addText(result)
    })
    .catch((result) => {
      addText(result)
    })
})
