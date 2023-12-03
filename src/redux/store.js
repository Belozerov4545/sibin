import { configureStore } from '@reduxjs/toolkit';
import selectReducer from './slices/selectSlice';
import tableReducer from './slices/tableSlice'

export default configureStore({
    reducer: {
      select: selectReducer,
      data: tableReducer,
    },
  });