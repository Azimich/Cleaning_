
export const initMap = () => {
  let center = [55.86318338367691,37.045219532470895];

  function init() {
    let map = new ymaps.Map('map-test', {
      center: center,
      zoom: 17,
    });
  
    let placemark = new ymaps.Placemark(center, {
      balloonContent: `
        <div class="ballon">
          <div class="baloon__address">
            <b>ЦЕНТРАЛЬНЫЙ ОФИС</b>
            <p>МО, г.о. Истра, с. Рождествено, ул. Сиреневый бульвар д 2</p>
          </div>
        </div>
      `
    }, {
      iconImageSize: [40, 40],
      iconImageOffset: [-10, -50]
    });
  
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    placemark.ball
    map.geoObjects.add(placemark);
  }
  
  ymaps.ready(init);
}