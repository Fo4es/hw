export default function Postcomponent({item:{title,body}}){
    return(
        <div>
            {title} - {body}
        </div>
    );
}