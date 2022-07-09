export default function Postcomponent({item:{id,body}}){
    return(
        <div>
            <hr/>
            <h3>details</h3>
            {id} - {body}
            <hr/>
        </div>
    );
}