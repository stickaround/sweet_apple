import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) => getDefault().prepend(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
