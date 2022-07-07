export default function ApiServices (url){
    this.getAlldata=()=>fetch(`https://jsonplaceholder.typicode.com/${url}`)
        .then(value => value.json())
    this.getSingledata=(id)=>fetch(`https://jsonplaceholder.typicode.com/${url}/${id}`)
        .then(value => value.json())
}