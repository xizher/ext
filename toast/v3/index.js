import { createApp, h } from 'vue'
import Toast from './toast.vue'

export function showToast (title = '', content = '') {
  const app = createApp({
    render () {
      return h(Toast, {
        title, content
      })
    }
  })

  document.querySelectorAll('.toast-panel').forEach(elem => {
    elem.remove()
    // elem.style.display = 'none'
  })
  const parents = document.createElement('div')
  const element = app.mount(parents).$el

  document.body.append(element)
}
