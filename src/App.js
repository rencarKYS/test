import { useState } from '../core/hooks.js';

export default function App({ $target }) {
  const [ count, setCount ] = useState(1)
  const [ cat, setCat ] = useState('고양이')
  $target.innerHTML = `
    <p>${count}</p>
    <button class="plus">+</button>
    <p>${cat}</p>
    <button class="cat">+</button>
  `
  
  const button = document.querySelector('.plus')
  button.addEventListener('click', () => {
    setCount(count + 1)
    setCat(cat + '야옹')
  })

  const button2 = document.querySelector('.cat')
  button2.addEventListener('click', () => {
    setCat(cat + '야옹')
  })
}
