import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}

export const CounterSclice=createSlice({
    name:"CounterSclice",
    initialState,
    reducers:{
        count:(state)=>{
            state.count=state.count+1
        }
    }
})

export const { count }= CounterSclice.actions;
export default CounterSclice.reducer
