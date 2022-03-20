export function singleSelector (dom) {
  return document.querySelector(dom)
}

export function multiSelector(doms) {
  return [...document.querySelectorAll(doms)]
}