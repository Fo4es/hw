export default function Posts({posts}){
    return(
        <div>
            {posts.map(value => <div>{value.body}</div>)}
        </div>
    );
}