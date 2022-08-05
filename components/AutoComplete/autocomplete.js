import React from 'react'
import { Box } from '@mui/material'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import useOnclickOutside from 'react-cool-onclickoutside'

export const Autocomplete = ({ isLoaded }) => {
  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  })
  const ref = useOnclickOutside(() => {
    clearSuggestions()
  })

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value)
  }

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false)
      clearSuggestions()

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log('📍 Coordinates: ', { lat, lng })
        })
        .catch((error) => {
          console.log('😱 Error: ', error)
        })
    }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })
  React.useEffect(() => {
    if (isLoaded) {
      init()
    }
  }, [isLoaded, init])

  return (
    <Box sx={{ position: 'relative' }} ref={ref}>
      <input
        type='text'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='*Найдите на карте адрес доставки и кликнете на него.'
      />
      {status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </Box>
  )
}
