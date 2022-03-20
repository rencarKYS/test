import App from './src/App.js'
import rerender from './external/rerender.js'
import { singleSelector } from './src/utils/domApi.js'

const $root = singleSelector('#root')
App({ $target: $root })
rerender(App, $root)
