import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catID: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCatID(state, action) {
      state.catID = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCatID, setSort, setSearch } = filtersSlice.actions;

export default filtersSlice.reducer;
