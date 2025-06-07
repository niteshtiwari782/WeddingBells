import React from 'react';

import './styles.css';

export default function FilterPane() {
  return (
    <div className="FilterPanelContainer">
      <label className="FilterTitle">Filters :</label>
      <div className="scroll-container">
        <div className="scroll-item">Date</div>
        <div className="scroll-item">Budget</div>
        <div className="scroll-item">Location</div>
        <div className="scroll-item">Guest Count</div>
      </div>
    </div>
  );
}
