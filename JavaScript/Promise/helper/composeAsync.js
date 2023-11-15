const applyAsync = (acc, val) => acc.then(val);

/**
 * 顺序执行异步函数
 * 示例：
 * const transformData = composeAsync(func1, func2, func3);
 * const result3 = transformData(data);
 * @param  {...any} funcs 
 * @returns 
 */
const composeAsync = (...funcs) => {
  return (x) => {
    funcs.reduce(applyAsync, Promise.resolve(x));
  }
}

export default composeAsync