const requestUrl = 'http://cba.itlike.com/public/index.php?s=/api/address/list'

const sendRequest = () => {
  // 1. 创建XHR
  const xhr = new XMLHttpRequest()
  // 2. 配置请求方法和url地址
  xhr.open('GET', '/api/user')
  // 3. 监听onreadystatechange事件
  xhr.onreadystatechange  = (e) => {
    // 请求操作完成
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // 响应状态码为200
      if (xhr.status === 200) {
        const elTextArea = document.querySelector('textarea')
        elTextArea.value = xhr.response
      } else {
        alert("请求遇到了问题。");
      }
    }
  }
  // 4. 发起请求
  xhr.send()
}

const elBtn1 = document.querySelector('.btn1')
elBtn1.addEventListener('click', sendRequest)