export const initMap = () => {
  function init() {
    let map = new ymaps.Map('map', {
      center: [55.86318338367691,37.045219532470895],
      zoom: 17,
    });
  }
  alert('hi')
  ymaps.ready(init)
}