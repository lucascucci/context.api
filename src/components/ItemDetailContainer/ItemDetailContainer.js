import { usePeliContext } from "../../context/PeliContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    
    const {id} = useParams();
    const {data, setData} = usePeliContext();
    useEffect(()=> { setData(data.find((item) => item.id === parseInt(id)))},[id])
    console.log(data)
    return (
    <>

            <ItemDetail data={data} />
        
    </>
    )
}

export default ItemDetailContainer;



