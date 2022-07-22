import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars:[],
    carUpdate:null,
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
    reducers:{
        setUpdateCar:(state, action) => {
            state.carUpdate = action.payload
        }
    },
    extraReducers:(builder =>{
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.erros = null
                state.cars = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
               state.erros = action.payload
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const currentCar = state.cars.find(value=> value.id === action.payload.id);
                Object.assign(currentCar, action.payload)
                state.carUpdate = null
            })
    } )


});
const updateById = createAsyncThunk(
    'carSlice/update',
    async ({id,car})=>{
        const {data} = await carService.updateById(id, car);
        return data
    }
);

const {reducer:carReducer,actions:{setUpdateCar}} = carSlice;

const carAction = {
    getAll,
    setUpdateCar,
    updateById
}
export {carReducer,carAction}