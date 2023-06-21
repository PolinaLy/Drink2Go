var map = L.map('map').setView([59.968137, 30.316272], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var icon = new L.Icon({
  iconUrl: 'img/icons/stack.svg#map-marker',
  iconSize: [38, 50],
  iconAnchor: [20, 48],
  shadowSize: [41, 41]
});

L.marker([59.968137, 30.316272], {icon: icon}).addTo(map);
