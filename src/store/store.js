import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosSlice';
import employeesReducer from '../features/employeesSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    employees: employeesReducer,
  },
});

export default store;
