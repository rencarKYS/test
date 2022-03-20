import debounceFrame from '../core/debounceFrame.js';

let a = undefined
let renderCount = 0;
function rerender(callback, root) {
  if (a === undefined) {
    a = {callback, root}
  } else {
    renderCount += 1
    a.callback({$target: a.root})
  }
}

export default debounceFrame(rerender)