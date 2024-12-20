import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEmployees = createAsyncThunk('employees/fetch', async () => {
  // Using the fetch API instead of axios
  const response = await fetch('https://api.restful-api.dev/objects'); // Use the `/api` prefix
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  const data = await response.json();
  console.log(data)
  return data;
});


const employeesSlice = createSlice({
  name: 'employees',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default employeesSlice.reducer;
