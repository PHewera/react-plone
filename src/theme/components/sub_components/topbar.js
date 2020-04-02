import React from 'react'

const Topbar = ({ apiData }) => {
  return (
    <div id="topbar">
      <div id="logo-wrapper">
        <a href={apiData['@id']}>
          <img src={apiData['@id']+'/logo.png'} id="portal-logo" alt="logo" />
        </a>
      </div>
    </div>
  )
};

export default Topbar