export default function User({item,getPostid}){
    const onclick = () => {
        getPostid(item.id);

    }
    return (<div>
        <h2>{item.name} </h2>
        <button onClick={onclick}>ok</button>

    </div>);
}