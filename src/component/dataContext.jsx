import { createContext, useContext, useState } from "react";
import movieData from '../img/movieData.json'
const DataContext =  createContext();

export const DataProvider = (props) =>{
    const {children} = props;
    const [useData,setMovie] = useState(movieData)
    return (
       <DataContext.Provider value={{useData,setMovie}}>
        {children}
       </DataContext.Provider> 
    )
}

export const UseDataContext = () => useContext(DataContext);