import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../actions/counterSlice';
import balanceReducer from '../actions/balanceSlice';
import DebitReducer from '../actions/DebitsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: balanceReducer,
    debit: DebitReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
