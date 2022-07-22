import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../../services";
const initialState = {
    cars:[],
    erros: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ()=>{
        const {data} = await carService.getAll();
        return data

    }
);


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{},
    extraReducers:(builder =>{
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.erros = null
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
               state.erros = action.payload
            })
    } )


});

const {reducer:carReducer} = carSlice;

const carAction = {
    getAll
}
export {carReducer,carAction}