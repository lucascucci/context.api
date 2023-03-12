import { useContext, useEffect, useState } from "react";
import React from "react";
import {useParams} from "react-router-dom";
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore"


//
const PeliContext = React.createContext([]);

//hook
export const usePeliContext = () => useContext(PeliContext);

const PeliProvider = ({children}) => {

    const [data ,setData] = useState([])
    const { categoriaId } = useParams();
    
    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection= collection (querydb,"items")

        if(categoriaId){
            const queryFilter = query (queryCollection,where ("categoria","==", categoriaId))
            getDocs(queryFilter)
            .then (res => setData (res.docs.map(data => ({id:data.id,...data.data()}))))
        }else
        {
            getDocs(queryCollection)
            .then (res => setData(res.docs.map(data => ({id:data.id,...data.data()}))))
        }
    },[categoriaId]);


    console.log(data)

    return (
        <PeliContext.Provider value={{data}}>
            {children}
        </PeliContext.Provider>
    )
}

export default PeliProvider;