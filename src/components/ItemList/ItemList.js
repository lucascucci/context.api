import '../../css/itemList.css'
import { Link } from 'react-router-dom';

const ItemList = ({data}) => {
    
    return(
            <>
                <div className='card-container'>
                    <button>ver</button>
                    <img className="img" src={data.imagen} alt='pelicula'/>
                </div>
            </>
            )
    
}

export default ItemList;