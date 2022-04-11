import React, {useCallback, useRef} from 'react';
import {GoogleMap} from "@react-google-maps/api";
import {Box} from "@mui/material";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const GoogleMaps = ({center}) => {
  let mapRef = useRef(undefined)

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map
  }, [])

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined
  }, [])

  return (
      <Box sx={{width: '100%',height: '450px', margin: '40px 0', borderRadius: '8px'}}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>

      </Box>
);
};

export default GoogleMaps;