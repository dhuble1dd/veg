import {createSlice} from '@reduxjs/toolkit';

const CodeReducer = createSlice({
    name: 'codeReducer',
    initialState: {
        code: ''
    },
    reducers: {
        scannedCode(state, action) {
            state.code = action.payload
        }
    }
})

export default CodeReducer.reducer;
export const  {scannedCode} = CodeReducer.actions;