import { createSlice } from "@reduxjs/toolkit";

const saveToLocalST = (arr, item = 'book') => typeof window !== 'undefined' && localStorage.setItem(item, JSON.stringify(arr) || [])
const removeFromLocalST = (arr, item = book) => typeof window !== 'undefined' && localStorage.removeItem(item)
const getFromLocalST = (item = 'book') => typeof window !== 'undefined' && JSON.parse(localStorage.getItem(item) || JSON.stringify([]))

const initialState = getFromLocalST() || []

export const {actions: cartActions, reducer: cartReducers} = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBook: (state, {payload}) => {
            const prevBookIndex = state.findIndex(book => book.id === payload?.id);
            if(prevBookIndex !== -1) {
                state[prevBookIndex].count += 1
                saveToLocalST(state)
                return state
            } else {
                saveToLocalST([...state, payload])
                return [...state, payload]
            }
        },
        removeBooks: (state, {payload}) => {
            saveToLocalST([])
            return []
        },
        addCount: (state, {payload}) => {
            const prevBookIndex = state.findIndex(book => book.id === payload?.id);
            if(prevBookIndex !== -1) {
                state[prevBookIndex].count += 1
                saveToLocalST(state)
                return state
            } else {
                saveToLocalST(state)
                return state
            }
        },
        removeCount: (state, {payload}) => {
            const prevBookIndex = state.findIndex(book => book.id === payload?.id);
            if(prevBookIndex !== -1 && state[prevBookIndex].count > 1) {
                state[prevBookIndex].count -= 1
                saveToLocalST(state)
                return state
            } else {
                const arr = state.filter(book => book.id !== payload.id)
                saveToLocalST(arr)
                return arr
            }
        }
    }
})