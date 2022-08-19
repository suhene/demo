import { createContext, useState } from "react";
import movieData from '../img/movieData.json'
const CloneContext = createContext();

export const CloneProvider = (props) =>{
    const {children} = props;
    const [useClone,setClone] = useState(movieData)
}