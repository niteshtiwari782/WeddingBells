// filtersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVenueListing } from '../service/venueDetailService';

// Async thunk to fetch products based on filters
export const fetchProducts = createAsyncThunk('filters/fetchProducts', async filters => {
  const query = new URLSearchParams(filters).toString();
  return await fetchVenueListing(query, 1);
});

const filterData = (data, filter) => {
  let output = data.filter(o => {
    const costpp = o.startPrice / 10;

    if (filter['area'] && filter['area']?.toLowerCase() !== o.area?.toLowerCase()) {
      return false;
    }
    if (
      filter['budget_range'] &&
      filter['budget_range'].min <= costpp &&
      costpp <= filter['budget_range'].max
    ) {
      return false;
    }
    if (filter['city'] && filter['city']?.toLowerCase() !== o.location?.toLowerCase()) {
      return false;
    }
    if (
      filter['guest_range'] &&
      filter['guest_range'].min <= o.capacity &&
      o.capacity <= filter['guest_range'].max
    ) {
      return false;
    }
    //  if (filter['property_quality'] !== o.badgeValue) {
    //    return false;
    //  }
    //  if (filter['property_type'] !== o.badgeValue) {
    //    return false;
    //  }
    return true;
  });
  return output;
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: { category: '', priceRange: '' },
    products: [],
    page: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters, setPage } = filtersSlice.actions;

export default filtersSlice.reducer;
