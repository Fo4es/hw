export default function User({item,dani}){

    return(
        <div>
            {item.id}  {item.name}
            <button onClick={()=>{
                dani(item);

            }
            }>ok</button>
        </div>
            );
}