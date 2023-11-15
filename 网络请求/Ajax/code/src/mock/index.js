import Mock from 'mockjs'

Mock.mock(/\/api\/user/, 'get', {
  message: 'ok',
  status: 200,
  data: {
    id: '@id',
    name: '@name',
    age: '@natural(1,99)'
  }
})