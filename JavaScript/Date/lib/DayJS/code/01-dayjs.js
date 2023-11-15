const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')

// 1. 创建对象
// 当前时间
const d1 = dayjs()

// 参数为 ISO 8601 格式的字符串
const d2 = dayjs('1998-12-10T00:00:00Z')

// 参数为 指定格式字符串
dayjs.extend(customParseFormat)
dayjs("1998-12-10 00:00:00", "YYYY-MM-DD HH:mm:ss")

// 参数为 时间戳
dayjs(1318781876406) 

// 参数为 Date
const d3 = new Date(2018, 8, 18)
dayjs(d3)

console.log('----------------------------------------------------------------')

// 2. 取值/赋值
const d4 = d1.clone()
dayjs().year() // gets current year
dayjs().year(2000) // returns new dayjs object

dayjs().month() // gets current month
dayjs().month(0) // returns new dayjs object

dayjs().date() // gets day of current month
dayjs().date(1) // returns new dayjs object

dayjs().hour() // gets current hour
dayjs().hour(12) // returns new dayjs object

dayjs().minute() // gets current minute
dayjs().minute(59) // returns new dayjs object

dayjs().second() // gets current second
dayjs().second(1) // returns new dayjs object

dayjs().millisecond() // gets current millisecond
dayjs().millisecond(1) // returns new dayjs object

dayjs().day() // gets day of current week
dayjs().day(0) // returns new dayjs object

// 3. 输出
// 格式化时间
dayjs().format('YYYY-MM-DD HH:mm:ss')

// 时间戳
dayjs('2019-01-25').valueOf()
