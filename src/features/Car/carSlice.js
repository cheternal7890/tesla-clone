import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [ "Model X", "Cybertruck", "Solar Panels", "Solar Roofs"]
}

const carSlice = createSlice({

    name: "car",
    initialState,
    reducers: {}
})


export const selectCars = state => state.car.cars

export default carSlice.reducer 