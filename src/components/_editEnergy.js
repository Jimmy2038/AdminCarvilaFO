/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./_header";
import Aside from "./_aside";
import { useParams , useNavigate} from "react-router-dom";

const EditEnergy = () => {
    const { idEnergy } = useParams();
    const [energy, setEnergy] = useState(null);
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

  const handleLoadAll = async () => {
    
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      const response = await axios.get(`https://carvilla-production.up.railway.app/energie/getById/${idEnergy}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(response.data);
      
      setEnergy(response.data);
      console.log(response.data);
    //   handleLoadAll();
    } catch (error) {
    //   console.error("Erreur lors de la requête:", error);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }

      const response = await fetch(`https://carvilla-production.up.railway.app/energie/update/${idEnergy}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            idEnergie: idEnergy,
            nomEnergie: name
        }),
      });

    //   console.log("Réponse du serveur:", response.data);
      navigate("/energy");
    } catch (error) {
      console.error("Erreur lors de la requête d'insertion:", error);
      setError(
        "Erreur lors de l'insertion des données. Veuillez réessayer plus tard."
      );
    }
  };

  useEffect(() => {
    handleLoadAll();
    console.log(energy);
  }, []);

  if (energy==null) {
    return <div>Loading...</div>;
  }
    return (
        <>
        <Header />
        <Aside />
        <main role="main" className="main-content">
        <div className="container-fluid">
        <div className="col-12">
            <div className="mb-2 align-items-center">
                <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="card-header">
                    <strong className="card-title">
                        Edit Energy
                    </strong>
                    </div>
                    <div className="chartbox mr-4" >
                        <form >
                            <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">
                                Name
                            </label>
                            <input
                                name="energy"
                                type="text"
                                className="form-control"
                                id="recipient-name"
                                required
                                defaultValue={energy.nomEnergie}  // Utilisez la valeur de l'état local
                                onChange={(e) => setName(e.target.value)}
                            />
                            </div>
                            <div className="modal-footer">
                            <button onClick={(e) => {
                            handleEdit(e);
                            }}  className="btn mb-2 btn-primary" >
                                Save
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        </main>
        </>
    )
}

export default EditEnergy;
