



const Location = ({data}) => {



    return (
        <div className="container-location">
            <div className="container-info">
                <h2>Nombre:</h2>
                <p>{data.name}</p>
            </div>
            <div className="container-info">
                <h2>Tipo:</h2>
                <p>{data.type}</p>
            </div>
            <div className="container-info">
                <h2>Dimension:</h2>
                <p>{data.dimension}</p>
            </div>
            <div className="container-info">
                <h2>Poblacion:</h2>
                <p>{data.residents?.length}</p>
            </div>
        </div>
    );
};

export default Location;