export const initMap = () => {
  function init() {
    let map = new ymaps.Map('map', {
      center: [],
      zoom: 10,
    });
  }

  ymaps.ready(init)
}