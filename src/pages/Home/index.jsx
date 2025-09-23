import React, { useEffect, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import FilterPanel from '../../Component/FilterPanel';
import VenueShowcase from '../../Component/VenueShowcase';

import './styles.css';
import LoadingScreen from '../../Component/Loadingscreen';

import { fetchProducts, setPage } from '../../app/FilterSlice';
import Pagination from '../../Component/Pagination';
import { fetchVenueListing } from '../../service/venueDetailService';

export default function HomePage() {
  const dispatch = useDispatch();
  const { filters, products, page, loading, error } = useSelector(state => state.filters);
  const [currentPage, setCurrentPage] = useState(1);
  const [venueList, setVenueList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [filters]);

  useEffect(() => {
    setIsDisabled(prevState => false);
    setVenueList(prevState => products.items);
  }, [products]);

  if (loading) {
    return <LoadingScreen />;
  }

  const handlePagination = () => {
    setIsDisabled(prevState => true);
    setCurrentPage(prevState => prevState + 1);
    fetchVenueListing(filters, currentPage + 1).then(res => {
      setVenueList(prevState => [...prevState, ...res.items]);
      setCurrentPage(prevState => res.page);
      setIsDisabled(prevState => false);
    });
  };

  return (
    <div className="homeContainer">
      <FilterPanel />
      <div className="property-listing">
        <span className="bold-label">Listing 153 Properties</span>
        <div className="sorting-btn">
          <span>Sort</span>
          <FaSort />
        </div>
      </div>
      <VenueShowcase venueList={venueList} />
      <Pagination handlePagination={handlePagination} isDisabled={isDisabled} />
    </div>
  );
}
