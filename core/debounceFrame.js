const debounceFrame = callback => {
  let nextFrameCallback = -1;
  return (a, b) => {
    cancelAnimationFrame(nextFrameCallback);
    nextFrameCallback = requestAnimationFrame(() => callback(a, b))
  }
}

export default debounceFrame
