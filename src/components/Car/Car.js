import css from "./Car.css";

export default function Car({car}){
    const {model,id,price,year} = car
    return(
        <div className={css.Car}>
         <div>id:{id}</div>
         <div>model:{model}</div>
         <div>price:{price}</div>
         <div>year:{year}</div>

        </div>
    );
}