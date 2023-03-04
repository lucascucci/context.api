

const ItemDetail =({data}) => {
console.log(data)
    return (
    <>
        <div>
            <h1>
                {data.titulo}
            </h1>
        </div>    
</>


    )
}

export default ItemDetail;