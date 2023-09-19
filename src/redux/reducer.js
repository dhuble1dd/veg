import {createSlice} from '@reduxjs/toolkit';
import strings from '../Lng/localization';

const CodeReducer = createSlice({
    name: 'codeReducer',
    initialState: {
        code: '',
        lng: strings.getInterfaceLanguage() 
    },
    reducers: {
        scannedCode(state, action) {
            state.code = action.payload
        },
        lng(state,action) {
            state.lng = action.payload
        }
    }
})

export default CodeReducer.reducer;
export const  {scannedCode, lng} = CodeReducer.actions;