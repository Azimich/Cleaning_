export const initMap = () => {
  function init() {
    let map = new ymaps.Map('map', {
      center: []
    });
  }

  ymaps.ready(init)
}