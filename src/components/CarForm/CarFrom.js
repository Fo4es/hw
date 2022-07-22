import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../redux";

export default function CarFrom(){
    const {register,reset,handleSubmit,setValue} = useForm();
   const dispatch = useDispatch();
    const {carUpdate} = useSelector(state => state.cars);

    useEffect(()=>{
        if(carUpdate)
        {
            setValue('model', carUpdate.model)
            setValue('price', carUpdate.price)
            setValue('year', carUpdate.year)
        }

    },[carUpdate])

    const submit = async (data)=> {
     await dispatch(carAction.updateById({id:carUpdate.id, car:data}))
        reset()
    };

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'model'} {...register('model')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'}  {...register('year')}/>
            <button>Update</button>
        </form>
    );
}