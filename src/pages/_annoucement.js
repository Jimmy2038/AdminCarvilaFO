/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/_header";
import Aside from "../components/_aside";

const Announcement = () => {
  const car_img = {
    width: "8rem",
    heigth: "8rem",
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleLoadAll = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }

      const url = `https://aromatic-fork-production.up.railway.app/annonce/getNonValide`;

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setData(response.data);
      console.log(response.data);

    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      setError(
        "Erreur lors du chargement des données. Veuillez réessayer plus tard."
      );
    }
  };

  useEffect(() => {
    // marquerId est récupéré à partir des paramètres d'URL
    handleLoadAll();
  }, []);

  const formatDate = (dateArray) => {
    const formattedDate = new Date(...dateArray).toLocaleDateString();
    return formattedDate;
  };

  const handleDetailClick = (idAnnonce) => {
    // Rediriger l'utilisateur vers la page de détail avec l'ID de l'annonce
    window.location.href = `/detailAnnouncement/${idAnnonce}`;
  };


  
  if (data==null) {
    console.log("huhuhuhuhuhuhu");
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <Aside />
      <main role="main" className="main-content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row align-items-center my-4">
                <div className="col">
                  <h2 className="h3 mb-0 page-title">Announcement Publish</h2>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <table className="table table-borderless table-hover">
                    <thead>
                      <tr>
                        <th>Car Picture</th>
                        <th>Owner</th>
                        <th>Car Model</th>
                        <th>Car Year</th>
                        <th>Announcement Date</th>
                        <th>Car Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((announcement, index) => (
                        <tr key={index}>
                          <td>
                            <div className="avatar avatar-sm">
                              {announcement.photos.length > 0 ? (
                                  <img
                                    src={"data:image/jpeg;base64," + announcement.photos[0].bin}
                                    alt="..."
                                    style={car_img}
                                  />
                                ) : (
                                  <p className="text-muted">Vous n'avez pas encore de photo</p>
                                )}
                            </div>
                          </td>
                          <td>
                            <p className="mb-0 text-muted">
                              {/* <strong>{announcement.utilisateur.pseudo}</strong> */}
                            </p>
                            <small className="mb-0 text-muted">
                              {announcement.idUtilisateur}
                            </small>
                          </td>
                          <td>
                            <p className="mb-0 text-muted">
                              {announcement.model.nomModel}
                            </p>
                          </td>
                          <td>
                            <p className="mb-0 text-muted">
                              {announcement.annee}
                            </p>
                          </td>
                          <td className="text-muted">
                            {formatDate(announcement.daty)}
                          </td>
                          <td>
                            <p className="mb-0 text-muted">
                              {announcement.prix} MGA
                            </p>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn m-2 btn-warning"
                              onClick={() =>
                                handleDetailClick(announcement.idAnnonce)
                              }
                            >
                              <span className="fe fe-alert-circle fe-16 mr-2"></span>
                              Detail
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <nav aria-label="Table Paging" className="my-3">
                <ul className="pagination justify-content-end mb-0">
                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Announcement;
