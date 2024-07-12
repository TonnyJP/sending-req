import { useState, useEffect } from 'react';
import axios from 'axios';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [AvailablePlaces, setAvailablePlaces] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/places');
    if (response.status === 200) {
      setAvailablePlaces(response.data.places);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Places
      title='Available Places'
      places={AvailablePlaces}
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  );
}
