import { h } from 'kdu'
import Theme from 'witepress/theme'
import './styles/vars.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      //
    })
  }
}
