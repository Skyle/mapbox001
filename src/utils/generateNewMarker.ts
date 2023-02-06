import { Popup, Marker, Map } from "mapbox-gl";

export const generateNewMarker = ({
  lat,
  lng,
  map,
}: {
  lng: number;
  lat: number;
  map: Map;
}) => {
  new Marker({ color: "#ffff66", scale: 1.5 })
    .setLngLat([lng, lat]) // CAN'T USE IT HERE
    .addTo(map)
    .setPopup(
      new Popup({ offset: 25 }) // add popups
        .setHTML(
          '<label for="colorWell">Color:</label>\n' +
            '<input type="color" value="#ff0000" id="colorWell" class="pickMe" />'
        )
    );
};
