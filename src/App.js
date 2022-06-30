import {useForm} from "react-hook-form";
import {saveUser} from "./services/services_api";

function App() {
    let {register,handleSubmit} = useForm()
    const onSubmit = (data) => {
         saveUser(data).then(data=>console.log(data));
    }
  return (
      <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type={'text'}{...register('username',{required:true})}/>
              <input type={'text'}{...register('surname',{required:true})}/>
                <button>save</button>
            </form>
      </div>
  );
}

export default App;
