import React from "react";
import { render } from "react-dom";
import Map from "./Map";

class App extends React.Component {
  state = {
    markersData: [{ latLng: { lat: 53.42894, lng: 14.55302 }, title: 1 }]
  };

  addMarker = e => {
    const { markersData } = this.state;

    const lastMarker = markersData[markersData.length - 1];

    const newMarker = {
      latLng: { lat: e.latlng.lat, lng: e.latlng.lng },
      title: lastMarker.title + 1
    };

    this.setState({
      markersData: [...markersData, newMarker]
    });
  };

  render() {
    const { markersData } = this.state;
    return (
      <div>
        <Map markersData={markersData} addMarker={this.addMarker} />
        <ul>
          Markers data:
          {markersData.map(marker => (
            <li key={marker.title}>
              {marker.title}, lat: {marker.latLng.lat}, lng: {marker.latLng.lng}
              ,
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
