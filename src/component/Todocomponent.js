export default function Todocomponent({item:{id,title}}){
    return(
        <div>
            {id} - {title}
        </div>
    );
}