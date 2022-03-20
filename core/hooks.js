import rerender from '../external/rerender.js'

let currentStateKey = 0;
const states = []

/* 
  useState 가 해결해야 하는 문제
  1. 여러개의 useState 에 대해서 처리할 수 있어야 한다.
  - state 를 useState 함수의 외부에 두어 해결
  2. useState 는 초기값을 할당할 수 있어야 하고 값이 변경되면 화면을 업데이트 해야한다.
  3. useState 에 들어온 값이 이전값과 동일할경우 렌더링을 하지 않는다.
  4. setState 가 동시에 여러번 호출 되었을때 렌더링은 한번만 호출되어야 한다.
  - rerneder 시 debounceFrame 함수 사용
*/

export function useState(initState) {
  const key = currentStateKey;
  if (states.length === currentStateKey) {
    states.push(initState)
  }
  const state = states[key];
  const setState = (newState) => {
    // 원시값일때
    if (newState === state) return
    // 객체나 배열일때
    if (JSON.stringify(newState) === JSON.stringify(state)) return;

    states[key] = newState
    reset()
    rerender()
  }
  currentStateKey += 1
  return [state, setState]
}

export function reset() {
  currentStateKey = 0
}