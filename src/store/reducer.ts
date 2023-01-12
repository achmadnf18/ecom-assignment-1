import { combineReducers } from '@reduxjs/toolkit';

import { poininApi } from '@/services/poinin';

export default combineReducers({
  [poininApi.reducerPath]: poininApi.reducer,
});
