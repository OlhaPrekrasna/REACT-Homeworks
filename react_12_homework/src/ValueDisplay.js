import React, { useRef } from 'react';

function ValueDisplay({ value }) {
  const prevValueRef = useRef('');

  const previousValue = prevValueRef.current;
  prevValueRef.current = value;

  return (
    <div style={{ marginTop: '20px' }}>
      <p>Current Value: {value}</p>
      <p>Previous Value: {previousValue}</p>
    </div>
  );
}

export default ValueDisplay;
