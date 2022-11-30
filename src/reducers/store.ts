import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../actions/counterSlice';
import balanceReducer from '../actions/balanceSlice';
import DebitReducer from '../actions/DebitsSlice';
import EntryReducer from '../actions/EntriesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balance: balanceReducer,
    debit: DebitReducer,
    entry: EntryReducer
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
