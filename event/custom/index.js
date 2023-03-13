class Press extends MouseEvent {
  constructor(...rest) {
    super(...rest);
  }

  get detail() {
    return {
      message: '测试自定义事件',
    };
  }

  get offsetX() {
    return 100;
  }

  get offsetY() {
    return 100;
  }
}

window.onload = function () {
  const demo = document.querySelector('#demo');

  demo.addEventListener('press', console.log);

  const pressEvent = new Press('press', {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  let pending = false;
  demo.addEventListener('mouseenter', (e) => {
    console.log('mouseenter', e);
    console.time('press');
    pending = true;
    setTimeout(() => {
      if (pending) {
        const msleaveEvent = new MouseEvent('mouseleave');
        demo.dispatchEvent(pressEvent);
        demo.dispatchEvent(msleaveEvent);
        console.timeEnd('press');
      }
    }, 1000);
  });
  demo.addEventListener('mouseleave', (e) => {
    console.log('mouseleave', e);
    pending = false;
  });
}
