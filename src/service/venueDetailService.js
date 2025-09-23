import { message } from 'antd';
import VenueDetailData from '../data/venueDetialData';
import axios from 'axios';

const API_Base = import.meta.env.VITE_API_BASE;

export const fetchVenueDetails = id => {
  return VenueDetailData.filter(el => el.id === id);
};

export const fetchAreaDetails = (venueData, id) => {
  return venueData.filter(el => el.id === id);
};

export const fetchVenueListing = async (filters, currentPage) => {
  try {
    return await axios
      .get(`${API_Base}/venues/getVenueList?limit=10&page=${currentPage}`)
      .then(res => {
        const { data } = res;
        const { items, page, total } = data;
        return {
          items,
          page,
          total,
        };
      });
  } catch (err) {
    throw new Error((message = err.msg));
  }
};

export const fetchPackages = async venue_id => {
  try {
    return await axios.get(`${API_Base}/venueDetail/getPackages?venue_id=${venue_id}`).then(res => {
      const { data } = res;
      return data;
    });
  } catch (err) {
    throw new Error((message = err.msg));
  }
};

// getPackageDetail?package_id=68cfe241f4dc7199b747dbbf

export const fetchPackageDetail = async venue_id => {
  try {
    return await axios
      .get(`${API_Base}/venueDetail/getPackageDetail?package_id=${venue_id}`)
      .then(res => {
        const { data } = res;
        return data;
      });
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchFoodDetails = async venue_id => {
  try {
    return await axios
      .get(`${API_Base}/venueDetail/getFoodDetails?venue_id=${venue_id}`)
      .then(res => {
        const { data } = res;
        return data;
      });
  } catch (err) {
    throw new Error((message = err.msg));
  }
};

export const fetchReviews = async venue_id => {
  try {
    return await axios.get(`${API_Base}/venueDetail/getReviews?venue_id=${venue_id}`).then(res => {
      const { data } = res;
      return data;
    });
  } catch (err) {
    throw new Error((message = err.msg));
  }
};

export const fetchFacilities = async venue_id => {
  try {
    return await axios
      .get(`${API_Base}/venueDetail/getFacilities?venue_id=${venue_id}`)
      .then(res => {
        const { data } = res;
        return data;
      });
  } catch (err) {
    throw new Error((message = err.msg));
  }
};

export const fetchVenueMetaData = async venue_id => {
  try {
    return await axios
      .get(`${API_Base}/venueDetail/getVenueMetaData?venue_id=${venue_id}`)
      .then(res => {
        const { data } = res;
        return data[0];
      });
  } catch (err) {
    throw new Error(err);
  }
};
