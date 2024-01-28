/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/_header";
import Aside from "../components/_aside";
import ModalModel from "../components/_modalModel";
import { useNavigate  } from "react-router-dom";
import EditModel from "../components/_editModel";

const Model = () => {
  const btn_add = {
    float: "right",
  };
  const table = {
    padding: "5rem 5rem",
  };
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLoadAll = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }

      const url = `https://aromatic-fork-production.up.railway.app/model/get`;

      const response = await axios.get(url, {
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
    // marquerId est récupéré à partir des paramètres d'URL
    handleLoadAll();
  }, []);

  const id = (idModel) => {
    // Rediriger l'utilisateur vers la page de détail avec l'ID de l'annonce
    navigate(`/EditModel/${idModel}`);
  };
  return (
    <>
      <Header />
      <Aside />
      <main role="main" className="main-content">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row align-items-center mb-2">
                <div className="col">
                  <h2 className="h5 page-title">Welcome!</h2>
                </div>
                <div className="col-auto">
                  <form className="form-inline">
                    <div className="form-group d-none d-lg-inline">
                      <label htmlFor="reportrange" className="sr-only">
                        Date Ranges
                      </label>
                      <div id="reportrange" className="px-2 py-2 text-muted">
                        <span className="small"></span>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn btn-sm">
                        <span className="fe fe-refresh-ccw fe-16 text-muted"></span>
                      </button>
                      <button type="button" className="btn btn-sm mr-2">
                        <span className="fe fe-filter fe-16 text-muted"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mb-2 align-items-center">
                <div className="card shadow mb-4">
                  <div className="card-body">
                    <div className="chartbox mr-4" style={table}>
                      <div className="row">
                        <div className="col-md-6 my-4">
                          <h5 className="card-title">List Model</h5>
                        </div>
                        <div className="col-md-6 my-4">
                          <button
                            type="button"
                            className="btn mb-2 btn-outline-primary "
                            style={btn_add}
                            data-toggle="modal"
                            data-target="#ModalModel"
                            data-whatever="@mdo"
                          >
                            New Model
                          </button>
                        </div>
                      </div>
                      <table className="table table-hover table-sm">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Model</th>
                            <th>Mark</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((model, index) => (
                            <tr key={index}>
                              <td>{model.idModel}</td>
                              <td>{model.nomModel}</td>
                              <td>{model.marque.nomMarque}</td>
                              <td>
                                
                                <button
                                  type="button"
                                  className="btn m-2 btn-success"
                                  onClick={() => id(model.idModel)}
                                >
                                  <span className="fe fe-pen-tool fe-16 mr-2"></span>
                                  Edit
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ModalModel />
      <EditModel />
    </>
  );
};

export default Model;
