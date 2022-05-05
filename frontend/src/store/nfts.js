import {createSlice} from '@reduxjs/toolkit';

const initialNftsState ={nfts: [], uris: [], addresses: []};

const nftsSlice = createSlice({
    name: 'nfts',
    initialState: initialNftsState,
    reducers: {
        loadNfts(state, action) {
            state.nfts = action.payload.nfts;   
        },
        loadURIS(state, action) {
            state.uris = action.payload.uris;   
        },
        loadAddresses(state, action) {
            state.addresses = action.payload.addresses;
        }
    }
})

export default nftsSlice.reducer;
export const nftsActions = nftsSlice.actions; 