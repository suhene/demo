import { Avatar } from "./Avatar"

export const Cart = ({data}) =>{
    let arr = [data.name,data.image,data.date];
    return (
        <div>
            <div style={{width:'300px',padding:'15px'}}>
              <Avatar imageData={data} />
              <h2>{arr[0]}</h2>
              <h4 style={{fontWeight:'400'}}>{arr[2]}</h4>
              <button onClick={{}}>More</button>
            </div>
        </div>
    )
}