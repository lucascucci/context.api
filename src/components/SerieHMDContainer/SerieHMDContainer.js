import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import SerieHMD from "../Series/SerieHMD/SerieHMD";

const SerieHMDContainer = () => {

    const [dataNv, setDataNv] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'serieHMD')

        if (categoriaId) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setDataNv(res.docs.map(data => ({ id: data.id, ...data.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setDataNv(res.docs.map(data => ({ id: data.id, ...data.data() }))))
        }
    }, [categoriaId])

    return <SerieHMD dataNv={dataNv} />
}

export default SerieHMDContainer;