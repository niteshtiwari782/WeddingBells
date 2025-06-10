import VenueDetailData from '../data/venueDetialData';

export const fetchVenueDetails = id => {
  return VenueDetailData.filter(el => el.id === id);
};
