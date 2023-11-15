// 1. 创建对象
// 当前时间
const d1 = new Date()
console.log(d1.toLocaleString())

// 1998-12-10
const d2 = new Date('1998-12-10T00:00:00')
console.log(d2.toLocaleString())

// 1998-12-10
const d3 = new Date(1998, 11, 10)
console.log(d3.toLocaleString())

// 时间戳
const d4 = new Date(1698758354000)
console.log(d4.toLocaleString())

// 2. get
console.log('----------------------------------------------------------------')
function getTime(d){
  const mapDay = ['日', '一', '二', '三', '四', '五', '六']

  const year = d.getFullYear()
  const month = d.getMonth() + 1 // 月份要+1
  const date = d.getDate()
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()
  const millisecond = d.getMilliseconds()
  const day = mapDay[d.getDay()] // 星期日取值为0
  console.log(`${year}-${month}-${date} ${hour}:${minute}:${second}:${ millisecond}, 星期${day}`)
}
getTime(d1)

// 3. set
console.log('----------------------------------------------------------------')
function setTime(d, {year, monthIndex, date, hour, minute, second, millisecond}){
  d.setFullYear(year)
  d.setMonth(monthIndex)
  d.setDate(date)
  d.setHours(hour)
  d.setMinutes(minute)
  d.setSeconds(second)
  d.setMilliseconds(millisecond)
}
setTime(d2, {year: 1999, monthIndex: 1, date: 14, hour: 12, minute: 8, second: 20, millisecond: 9})
getTime(d2)
console.log('距离1970 年 1 月 1 日 00:00:00 的毫秒数：' + d2.getTime())

// 4. to
console.log('----------------------------------------------------------------')
const t1 = d1.toDateString()
console.log(t1)

const t2 = d1.toISOString()
console.log(t2)

const t3 = d1.toJSON()
console.log(t3)

const t4 = d1.toLocaleDateString()
console.log(t4)

const t5 = d1.toLocaleString()
console.log(t5)

const t6 = d1.toLocaleTimeString()
console.log(t6)

const t7 = d1.toString()
console.log(t7)

const t8 = d1.toTimeString()
console.log(t8)

const t9 = d1.toUTCString()
console.log(t9)

// 5. parse
console.log('----------------------------------------------------------------')
// 当前时间
console.log(Date.parse(d1))

console.log(new Date(Date.parse('1998-12-10T00:00:00')).toLocaleString())

console.log(new Date(Date.parse('2015-10-12 12:00:00')).toLocaleString())
// const d6 = new Date(1998, 11, 10)
// console.log(d3.toLocaleString())

