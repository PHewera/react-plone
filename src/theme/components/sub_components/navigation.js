import React from 'react'

const Navigation = ({ navigation }) => {
  return (
    <div id="navigation">
      <ul id="navigation-wrapper">
        {typeof navigation !== "undefined" &&
          Object.entries(navigation).map((item, idx) => (
          <li className="nav-element" key={idx}>
            <a href={item[1]['@id']}>{item[1].title}</a>
          </li>
          ))
        }
      </ul>
    </div>
  )
};

export default Navigation