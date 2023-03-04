import { Link } from 'react-router-dom';

const CartaFilter = ({items}) => {

    return(

        <div>
            <span>
                {items.titulo}
                <div>
                <img className="img" src={items.imagen} alt='pelicula'/><div></div>
                <Link to={`/item/:id`}><button> Ver mas </button></Link>
                </div>
            </span>     
        </div>
    )

}

export default CartaFilter;
