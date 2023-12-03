import { createSlice } from '@reduxjs/toolkit';

export const selectSlice = createSlice({
  name: 'select',
  initialState: 0,
  reducers: {
    setSelect: (state, action) => state = action.payload,        
  },
});

export const { setSelect } = selectSlice.actions;

const getOption = (num) => (dispatch) => {
  return dispatch(setSelect(Number(num)));
}

export default selectSlice.reducer;
export {getOption}