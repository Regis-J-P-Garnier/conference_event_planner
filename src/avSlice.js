import { createSlice } from "@reduxjs/toolkit";
const projectorsImgUrl = 'images/projector-6760349_1280.jpg';
const speakersImgUrl  =  'images/speakers-2265542_1280.jpg';
const microphonesImgUrl  =  'images/studio-microphone-2233079_1280.jpg';
const whiteboardsImgUrl  =  'images/canvas-8325881_1280.webp';
const signagesImgUrl  =  'images/signage-1225355_1280.jpg';
const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: projectorsImgUrl,
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: speakersImgUrl,
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: microphonesImgUrl,
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: whiteboardsImgUrl,
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: signagesImgUrl,
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
  ],
  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});
export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;
export default avSlice.reducer;
