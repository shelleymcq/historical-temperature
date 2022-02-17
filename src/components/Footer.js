import React from 'react';

const footerStyles = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'gray'
};

export default function Footer() {
  return (
    <footer style={footerStyles}>
      Created with <span role='img' aria-label='yarn'>🧶</span> by Shelley McHardy 
    </footer>
  )
}

