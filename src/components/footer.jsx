import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p>&copy; 2025 GameStrix. All rights reserved.</p>
        <div>
          <a
            href="https://chamikamunithunga.github.io/Chamika.M/"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
          >
            Privacy Policy
          </a>
          <a
            href="https://chamikamunithunga.github.io/Chamika.M/"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
          >
            Terms of Service
          </a>
          <a
            href="https://chamikamunithunga.github.io/Chamika.M/"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLinkStyle}
          >
            Contact
          </a>
        </div>
        <p>
          Made with{' '}
          <a
            href="https://chamikamunithunga.github.io/Chamika.M/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...footerLinkStyle, fontWeight: 'bold' }}
          >
            Chamika.M
          </a>
        </p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: ' #123524',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const footerContentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '10px',
};

const footerLinkStyle = {
  color: ' #85A947',
  textDecoration: 'none',
  margin: '0 15px',
};

export default Footer;
