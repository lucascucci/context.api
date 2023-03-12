import SerieHMDCard from "../SerieHMDCard/SerieHMDCard";


const SerieHMD = ({dataNv}) => {
    
    return(
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {dataNv.map((dataNv) => (
                <SerieHMDCard dataNv={dataNv} key={dataNv.id}/>
            ))}
        </div>
    )
}

export default SerieHMD;