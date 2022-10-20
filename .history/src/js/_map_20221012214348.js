
export const initMap = () => {
  let center = [55.760221, 37.618561];
  let center1 = [53.851761, 27.480785];
  
  
  function init() {
    let map = new ymaps.Map('map-test', {
      center: center,
      zoom: 17,
    });
  
    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/marker.svg',
      iconImageSize: [30, 30],
      iconImageOffset: [-19, -44],
      iconCaption: 'подсказка'
    });
  
  
    let placemark1 = new ymaps.Placemark(center, {
      balloonContent: `
      <div class="ballon">
        <div class="baloon__address">ВЕЗА МОСКВА</div>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <div class="baloon__contacts">
          <img src="img/marker.svg">
          <a href="tel: +7 999 999 99 99">+7 999 999 99 99</a>
        </div>
      </div>
      `
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/img2/marker.svg',
      iconImageSize: [30, 30],
      iconImageOffset: [-19, -44]
    });
  
  
  
    let mark = new ymaps.Placemark(center1, {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/marker.svg',
      iconImageSize: [30, 30],
      iconImageOffset: [-19, -44]
    });
  
    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  
  
    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(mark);
    map.geoObjects.add(mark1);
  
  }
  
  ymaps.ready(init);
}