export const initMap = () => {
  function init() {
    let map = new ymaps.Map('map', {
      center: [55.8631788585596,37.04528658769625]],
      zoom: 10,
    });
  }

  ymaps.ready(init)
}