import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h3 className='text-center pt-5'>
        © 2022
      </h3>
      <div className='text-right'>
        <button type="button" id="installBtn" role="button">
        Click to Install!
      </button>
      </div>
      <script src="../../../serviceWorker.js"></script>
      <script src="../utils/install.js"></script>
    </footer>
  )
};

export default Footer;