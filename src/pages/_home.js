/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/_header";
import { Chart as ChartJS } from "chart.js/auto";
import Aside from "../components/_aside";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Home = () => {
  const [data, setData] = useState([]);
  const [dataVente, setDataVente] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleLoadAll();
    handleLoadVente();     
    // console.log(data);
  }, []);


  const handleLoadAll = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }

      const response = await axios.get("http://localhost:8081/ByMarque", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });


      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      setError(
        "Erreur lors du chargement des données. Veuillez réessayer plus tard."
      );
    }
  };

  const handleLoadVente = async () => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        setError("Token d'autorisation manquant. Veuillez vous connecter.");
        return;
      }
  
      const response = await axios.get("http://localhost:8081/vente", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setDataVente(response.data);
      console.log(dataVente);  // Ajout de ce console.log
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
      setError(
        "Erreur lors du chargement des données. Veuillez réessayer plus tard."
      );
    }
  };


  if (data==null || dataVente==null) {
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
              <div className="row">
                <div className="mb-2 align-items-center col-md-6">
                  <div className="card shadow mb-4">
                    <div className="card-body" >
                      <div className="card-header">
                        <strong className="card-title">
                          Car sales statistics
                        </strong>
                      </div>
                      <div className="chartbox mr-4" >
                      
                        <Doughnut
                          data={{
                            labels: [
                              "Car sold (%)" ,
                              "Car not sold (%)",
                            ],
                            datasets: [
                              {
                                
                                data: [
                                   dataVente[1].pourcentage
                                   ,dataVente[0].pourcentage
                                ],
                                backgroundColor:[
                                  "#008000",
                                  "#FF3030",
                                ],
                                
                              },
                            ],
                          }}
                        />
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="card shadow">
                    <div className="card-header">
                      <strong className="card-title">
                        Best-selling car brand
                      </strong>
                    </div>
                    <div className="card-body my-n2">
                      <table className="table table-striped table-hover table-borderless">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Car Mark</th>
                            <th>Number of sales</th>
                            <th>Car Price</th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.map((marquev, index) => (
                          <tr key={index}> 
                            <td>{marquev.marqueId}</td>
                            <th scope="col">{marquev.nomMarque}</th>
                            <td>{marquev.nb} units</td>
                            <td>{marquev.prix} MGA</td>
                          </tr>
                          ))}
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-12">
              <div className="mb-2 align-items-center col-md-8">
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="card-header">
                        <strong className="card-title">
                          Car sales statistics
                        </strong>
                      </div>
                      <div className="chartbox mr-4" width="400" height="300">
                        <Line
                          data={{
                            labels: [
                              "Jan",
                              "Feb",
                              "Mar",
                              "Apr",
                              "Mey",
                              "Jun",
                              "Jul",
                              "Aug",
                              "Sep",
                              "Oct",
                              "Nov",
                              "Dec",
                            ],
                            datasets: [
                              {
                                label: "Revenue",
                                data: [
                                  100000, 400000, 700000, 550000, 600000,
                                  500000, 600000, 650000, 700000, 750000,
                                  700000, 800000,
                                ],
                                backgroundColor: "#064FF0",
                                borderColor: "#064FF0",
                              },
                              {
                                label: "Cost",
                                data: [
                                  0, 50000, 100000, 150000, 450000, 400000,
                                  350000, 250000, 450000, 500000, 550000,
                                  600000, 650000,
                                ],
                                backgroundColor: "#FF3030",
                                borderColor: "#FF3030",
                              },
                            ],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
