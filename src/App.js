import {useDispatch, useSelector} from "react-redux";

export default function App() {
    let state = useSelector(state => state);//Ми звертаємося до 8 рядку в індекс js тобто до поточного стейту
    let dispatch = useDispatch();// повертаємо посилання на Dispatch з react-redux


    return (<div>
        {state}
        <button onClick={() => {
            dispatch({type: "INC", payload: 1});//повертається в 8 рядок js action, де потім type порівнюється(10 рядок js)  з кожним case
        }}>INCrement
        </button>
        <button onClick={() => {
            dispatch({type: "DEC", payload: 1});//повертається в 8 рядок js action, де потім type порівнюється(10 рядок js)  з кожним case

        }}>DECrement
        </button>

        <button onClick={() => {
            dispatch({type: "RES"});//повертається в 8 рядок js action, де потім type порівнюється(10 рядок js)  з кожним case

        }}>Reset</button>

    </div>);
}