import axios from "axios";
import { useEffect, useState } from "react";

const ResidentInfo = ({personData}) => {

    const [detail, setDetail] = useState({});

    useEffect(() => {
      axios
        .get(personData)
        .then((resp) => setDetail(resp.data))
        .catch((error) => console.error(error));
    }, []);
  

    return (
          <div className="card">
        <li >
            <div className="card-container">
            <h2 className="nomber-card">{detail.name}</h2>
            <img className="img-card" src={detail.image} alt="" />
            <div className="card-info">
                <p className="card-info-p">Status: {detail.status}</p>
                <p className="card-info-p">Origen: {detail.origin?.name}</p>
                <p className="card-info-p">Especie: {detail.species}</p>
                <p className="card-info-p">Apariciones: {detail.episode?.length}</p>
            </div>
            
            </div>           
        </li>
       </div>
    );
};

export default ResidentInfo;