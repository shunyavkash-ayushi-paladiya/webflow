'use client'; 

import React from 'react';

export default function Button({ text }) {
  return (
    <button style={{ padding: '10px 20px', background: 'blue', color: 'white', borderRadius: '8px' }}>
      {text}
    </button>
  );
}
