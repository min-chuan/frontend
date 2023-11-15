/* 
{"message":"缺少必要的参数token, 请先登录","status":401,"data":[]}
*/

function Ajax(){

}

Ajax.prototype.get = (url, params = {}) => {
   // 创建XHR
   const xhr = new XMLHttpRequest()
   // 配置url和methods
   const urlObj = new URL(url)
   console.log(urlObj)
   xhr.open('GET', url);
   // 监听请求状态变化
   xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      if(xhr.status === 200){
        // do something
      } else {

      }
    }
   }
   // 发送请求
   xhr.send()
}

const sendRequest = () => {
  console.log('sendRequest')
  Ajax.get('https://www.baidu.com/v1/address?id=1')
}

const elBtn2 = document.querySelector('.btn2')
elBtn2.addEventListener('click', sendRequest)