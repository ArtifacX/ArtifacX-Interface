import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import nftsReducer from './nfts';

const store = configureStore({
    reducer: {
        auth: authReducer,
        nfts: nftsReducer
    }
})

export default store; 