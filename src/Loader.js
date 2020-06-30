import React from 'react';

const Loader = () => {
  return(
    <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
      <div className="lds-hourglass"></div>
    </div>
  )
}

export default Loader;
