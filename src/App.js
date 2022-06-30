import {useForm} from "react-hook-form";
import {savePost} from "./services/services_api";

function App() {
    let {register,handleSubmit} = useForm()
    const onSubmit = (data) => {
         savePost(data).then(data=>console.log(data));
    }
  return (
      <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type={'text'}{...register('name',{required:true})}/>
              <input type={'text'}{...register('body',{required:true})}/>
                <button>save</button>
            </form>
      </div>
  );
}

export default App;
