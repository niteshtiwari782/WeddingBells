import React, { useState } from 'react';

import './styles.css';

export default function Pagination({ handlePagination, isDisabled }) {
  return (
    <div className="pagination-container">
      <button disabled={isDisabled} onClick={handlePagination}>
        Load More
      </button>
    </div>
  );
}
