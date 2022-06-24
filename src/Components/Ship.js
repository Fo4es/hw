export default function Ship({item:{mission_name,launch_year, links:{mission_patch_small}}}){
    return(
        <div>
           <div> {mission_name} {launch_year}</div> <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
}