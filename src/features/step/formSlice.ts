import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    step: number;
    buyingFor: string;
    age: string;
    gender: string;
    interests: string;
    occasion: string;
    giftType: number | null;
    currency:string;
    spendAmount: string;
    country: string;
}

const initialState: FormState = {
    step: 1,
    buyingFor: "",
    age: "",
    gender: 'male',
    interests: "",
    occasion: "",
    giftType:null,
    currency:"",
    spendAmount: "",
    country: ""
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        addPersonalInfoData: (state, action: PayloadAction<{ buyingFor: string; age: string; gender: string; interests: string }>) => {
            state.buyingFor = action.payload.buyingFor;
            state.age = action.payload.age;
            state.gender = action.payload.gender;
            state.interests = action.payload.interests;
            state.step = state.step + 1;
        },
        addGiftDetailsData: (state, action: PayloadAction<{ occasion: string; giftType: number;currency:string; spendAmount: string; country: string }>) => {
            state.occasion = action.payload.occasion;
            state.giftType = action.payload.giftType;
            state.currency = action.payload.currency;
            state.spendAmount = action.payload.spendAmount;
            state.country = action.payload.country;
        },
        nextStep: (state) => {
            state.step = state.step + 1;
        },
        prevStep: (state) => {
            state.step = state.step - 1;
        },
    }
});
export function getCurrentStep(state) {
    return state.form.step;
}
export const {
    addPersonalInfoData,
    addGiftDetailsData,
    nextStep,
    prevStep,
} = formSlice.actions;

export default formSlice.reducer;
