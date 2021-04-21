import React from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const { eventId } = useParams()
  return <div>
    event: {eventId}
  </div>
}
