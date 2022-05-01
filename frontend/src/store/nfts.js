import {createSlice} from '@reduxjs/toolkit';

const initialNftsState ={nfts: [], uris: []};

const nftsSlice = createSlice({
    name: 'nfts',
    initialState: initialNftsState,
    reducers: {
        loadNfts(state, action) {
            state.nfts = action.payload.nfts;   
        },
        loadURIS(state, action) {
            state.uris = action.payload.uris;   
        }
    }
})

export default nftsSlice.reducer;
export const nftsActions = nftsSlice.actions; 