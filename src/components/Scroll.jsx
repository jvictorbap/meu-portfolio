import React from 'react'

function Scroll(props) {

  function preventDefault(e) {
    e.preventDefault();
  }

  let supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: () => { supportsPassive = true; }
    }));
  } catch (e) { }
  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  const divNode = document.getElementsByClassName('scroll')

  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  }

  function ScrollTimeout(){
    setTimeout(() => {
      limitarFuncao = false;
    }, 500);
  }

  let limitarFuncao = false;

  React.useEffect(() => {
    disableScroll();
    let div = 0;
    document.body.addEventListener('wheel', async (event) => {
      if (!limitarFuncao) {
        limitarFuncao = true;
        if (String(event.deltaY).startsWith('-')) {
          div = div - 1
        } else {
          div = div + 1
        }
        if (div < 0 || div > divNode.length - 1) {
          div = 0 
        }
        divNode[div].scrollIntoView({ behavior: 'smooth' })
        ScrollTimeout();
      }
    })
  })

  return (
    <>
    {props.children}
    </>
  )
}

export default Scroll