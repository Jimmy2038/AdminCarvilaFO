/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/_header";
import Aside from "../components/_aside";
import { useParams, useNavigate } from "react-router-dom";

const DetailAnnouncement = () => {
  const div_img = {
    width: "100%",
    heigth: "100%",
  };
  const car_img = {
    width: "15rem",
    heigth: "15rem",
  };
  const icone = {
    width: "100%",
    heigth: "100%",
  };

  const navigate = useNavigate();


  const { idAnnonce } = useParams();
  console.log(idAnnonce);
  const [annonceData, setAnnonceData] = useState(null);

  const handleLoadAll = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      const response = await axios.get(`https://carvilla-production.up.railway.app/annonce/getByIdAnnonce/${idAnnonce}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(response.data);
      
      setAnnonceData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  useEffect(() => {
    handleLoadAll();
    console.log(annonceData);
  }, []);



  const handleValid = async (idAnnonce) => {
    
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        console.error("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }
  
      const response = await axios.put(`https://carvilla-production.up.railway.app/annonce/valide/${idAnnonce}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log(response.data); // Afficher la réponse de la requête si nécessaire
      console.log(annonceData);
      handleLoadAll();
      navigate("/announcement");
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };
  console.log(annonceData);

  if (annonceData==null) {
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
              <h2 className="h3 mb-4 page-title">Announcement Detail</h2>
              <div className="row mt-5 align-items-center">
                <div className="col-md-3 text-center mb-5">
                  <div className="avatar avatar-xl">
                  {annonceData.photos.length > 0 ? (
                      <img
                        src={"data:image/jpeg;base64," + annonceData.photos[0].bin}
                        alt="..."
                        style={car_img}
                      />
                    ) : (
                      <p className="text-muted">Vous n'avez pas encore de photo</p>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <h4 className="mb-1">{annonceData.model.nomModel}</h4>
                      <p className="small mb-3">
                        {/* <span className="badge badge-dark">{annonceData.utilisateur.pseudo}</span> */}
                      </p>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-7">
                      <p className="text-muted">
                        {" "}
                        {annonceData.descri}
                        .{" "}
                      </p>
                    </div>
                    <div className="col">
                      <button className="btn btn-outline-success mr-2" onClick={() => handleValid(annonceData.idAnnonce)}>
                        Accept
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-md ">
                            <img
                              src="/assets/images/energy.png"
                              alt="..."
                              style={icone}
                            />
                          </span>
                        </div>
                        <div className="col pr-0">
                          <p className="small text-muted mb-0">Energy</p>
                          <span className="h3 mb-0">{annonceData.energie.nomEnergie}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-md ">
                            <img
                              src="/assets/images/transm.png"
                              alt="..."
                              style={icone}
                            />
                          </span>
                        </div>
                        <div className="col pr-0">
                          <p className="small text-muted mb-0">Transmission</p>
                          <span className="h3 mb-0">{annonceData.transmission.nomTransmission}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-md ">
                            <img
                              src="/assets/images/kilometrage.png"
                              alt="..."
                              style={icone}
                            />
                          </span>
                        </div>
                        <div className="col">
                          <p className="small text-muted mb-0">Kilometrage</p>
                          <div className="row align-items-center no-gutters">
                            <div className="col-auto">
                              <span className="h3 mr-2 mb-0">{annonceData.kilometrage}  Km </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3 text-center">
                          <span className="circle circle-md ">
                            <img
                              src="/assets/images/calendrier.png"
                              alt="..."
                              style={icone}
                            />
                          </span>
                        </div>
                        <div className="col">
                          <p className="small text-muted mb-0">Year</p>
                          <span className="h3 mb-0">{annonceData.annee}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-4">
              {annonceData.photos.map((photo, index) => (
                <div className="col-md-4">
                  <div className="card mb-4 shadow" key={index}>
                    <div className="card-body my-n3">
                   
                      <div className="row align-items-center">
                        <img
                           src={"data:image/jpeg;base64,"+photo.bin}
                          alt="..."
                          style={div_img}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailAnnouncement;
