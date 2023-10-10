import { configureStore } from '@reduxjs/toolkit'
import filterSlices from './slices/filterSlices'
import bookReducer from './books/reducer'

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterSlices
  }
})

export default store