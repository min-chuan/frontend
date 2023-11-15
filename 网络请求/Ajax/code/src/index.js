import './index.css'
import './js/ajax-basic'
import './js/ajax-get'
// 只在开发环境中使用mock
if (process.env.NODE_ENV === 'development') {
  import('./mock/index')
}