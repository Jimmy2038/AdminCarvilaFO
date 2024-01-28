/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalModel = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [idMarque, setIdMarque] = useState("");
  const handleInsert = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }

      const response = await fetch("https://aromatic-fork-production.up.railway.app/model/insert", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomModel: name,
          marque: {
            idMarque: idMarque,
          },
        }),
      });

      console.log("Réponse du serveur:", response.data);
      window.location.href = "/model";
    } catch (error) {
      console.error("Erreur lors de la requête d'insertion:", error);
      setError(
        "Erreur lors de l'insertion des données. Veuillez réessayer plus tard."
      );
    }
  };

  const handleLoadAll = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }

      const response = await axios.get("https://aromatic-fork-production.up.railway.app/marque/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data);
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      setError(
        "Erreur lors du chargement des données. Veuillez réessayer plus tard."
      );
    }
  };
  useEffect(() => {
    handleLoadAll();
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id="ModalModel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="varyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="varyModalLabel">
                Add new model
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleInsert();
                }}
              >
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Model Name
                  </label>
                  <input
                    name="model"
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Mark
                  </label>

                  <select
                    className="form-control select2"
                    id="simple-select2"
                    name="mark"
                    onChange={(e) => setIdMarque(e.target.value)}
                    value={idMarque}
                  >
                    <option value="">choose mark</option>
                    {data.map((data, index) => (
                      <option key={index} value={data.idMarque}>
                        {data.nomMarque}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn mb-2 btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalModel;
