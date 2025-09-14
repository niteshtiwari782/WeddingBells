import VenueDetailData from '../data/venueDetialData';

export const fetchVenueDetails = id => {
  return VenueDetailData.filter(el => el.id === id);
};

export const fetchAreaDetails = (venueData, id) => {
  return venueData.filter(el => el.id === id);
};
