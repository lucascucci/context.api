import { useState } from "react";
import { usePeliContext } from "../../context/PeliContext";
import CartaFilter from "../CartaFilter/CartaFilter";


const FilterMovies = () => {
    
    const {data}= usePeliContext();
    const [buscar, setBuscar] = useState('');

    const handleChange = (ev) => {
        setBuscar(ev.target.value);
    }
    const filteredMovies = data.filter((items)=> items.titulo.toLowerCase().includes(buscar.toLowerCase()))

    return(
        <div>
            <input
            type='text'
            value={buscar}
            onChange={handleChange}/>
            <div>
                {filteredMovies.map((items)=>(
                    <div key={items.id} ><CartaFilter items={items}/></div>
                ))}        
            </div>
        </div>
        
    )

}

export default FilterMovies;