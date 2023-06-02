import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Location() {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        () => {
          console.error("Error: The Geolocation service failed.");
        }
      );
    } else {
      console.error("Error: Your browser doesn't support geolocation.");
    }
  }, []);

  // const defaultProps = {
  //     center: {
  //       lat: 10.99835602,
  //       lng: 77.01502627
  //       },
  //     zoom: 11
  //   };
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "X49u2ezfxdeA3rWAL2v1fDae@krhn6hy" }}
        defaultCenter={currentLocation}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={currentLocation.lat}
          lng={currentLocation.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    // <div style={{ width:'100%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
    //    <h1>Location </h1>
    //    <div style={{ height: '100vh', width: '100%' }}>
    //   <GoogleMapReact
    //     bootstrapURLKeys={{ key: "X49u2ezfxdeA3rWAL2v1fDae@krhn6hy" }}
    //     defaultCenter={defaultProps.center}
    //     defaultZoom={defaultProps.zoom}
    //   >
    //     <AnyReactComponent
    //       lat={59.955413}
    //       lng={30.337844}
    //       text="My Marker"
    //     />
    //   </GoogleMapReact>
    // </div>

    // </div>
  );
}
const AnyReactComponent = ({ text }) => <div>{text}</div>;
