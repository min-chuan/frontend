import { fetchNum, addText } from './utils'


function fetchOptional(num){
  return new Promise((resolve, reject) =>{
    if(num < 1){
      resolve(num)
    } else {
      reject(num)
    }
  })
}

function fn(){
  // 2. 嵌套（精准捕获错误）
  // fetchOptional为可选函数，使用的是Promise嵌套写法，
  // catch只捕获fetchOptional和第一个then中的错误
  // 即便失败，也不影响后面then的执行
  // 注意：返回值要通过return透传
  fetchNum(0)
    .then((result) => {
      return fetchOptional(result)
                .then((result) => {
                  addText('校验成功')
                  return result // 透传
                })
                .catch((result) => {
                  addText('校验失败')
                  return result // 透传
                })
    })
    .then((result) => {
      return fetchNum(result)
    })
}

document.querySelector('.btn2').addEventListener('click', fn)


