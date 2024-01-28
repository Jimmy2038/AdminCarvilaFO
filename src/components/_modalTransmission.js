/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const ModalTransmission = () => {
  const [name, setName] = useState("");

  const [error, setError] = useState(null);

  const handleInsert = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }

      const response = await fetch(
        "https://aromatic-fork-production.up.railway.app/transmission/insert",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomTransmission: name,
          }),
        }
      );

      console.log("Réponse du serveur:", response.data);
      window.location.href = "/transmission";
    } catch (error) {
      console.error("Erreur lors de la requête d'insertion:", error);
      setError(
        "Erreur lors de l'insertion des données. Veuillez réessayer plus tard."
      );
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="ModalTransmission"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="varyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="varyModalLabel">
                Add new transmission
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
                    Name
                  </label>
                  <input
                    name="transmission"
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
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

export default ModalTransmission;
