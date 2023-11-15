const elTextArea = document.querySelector('textarea');

export function clearText(){
  elTextArea.value = ''
}

export function addText(text){
  elTextArea.value = elTextArea.value + text + '\n';
}

export function fetchNum(num){
  return new Promise((resolve, reject) =>{
      setTimeout(() => {
        const result = ++num
        addText(result)
        resolve(result)
      }, 1000)
  })
}
