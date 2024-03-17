import formReducer from "../features/step/formSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

const store=configureStore({
    reducer: {
        form: formReducer,
    },

})
export default store;