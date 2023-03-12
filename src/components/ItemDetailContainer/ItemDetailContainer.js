
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore,doc,getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [data,setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const querydb = getFirestore ()
        const queryDoc = doc(querydb,"items",id) 
        getDoc (queryDoc)
        .then (res=> setData({id:res.id,...res.data()}))
    },[id])

    return(
        <div>
            < ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;




//
//const ItemDetailContainer = () => {
    
    //const ItemDetailContainer = () => {
    
        //const {id} = useParams();
        //const {data, setData} = usePeliContext();
        //useEffect(()=> { setData(data.find((item) => item.id === parseInt(id)))},[id])

        //return (
        
        //<ItemDetail data={data} />    
        
        //)
    //}
    
//}

//export default ItemDetailContainer;