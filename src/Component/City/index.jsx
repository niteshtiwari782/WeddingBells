import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import './DropdownMenu.css';

function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-toggle">
        Currently Viewing Venue in Indore <FaChevronDown />
      </div>

      {open && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Indore</li>
          <li className="dropdown-item">Bhopal</li>
          <li className="dropdown-item">Gwalior</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
