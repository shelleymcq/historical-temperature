import React from 'react';

const footerStyles = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  textAlign: 'center',
  color: 'white',
  background: 'slate'
};

export default function Footer() {
  return (
    <footer style={footerStyles}>
      Created with &#129526 by Shelley McHardy
    </footer>
  )
}