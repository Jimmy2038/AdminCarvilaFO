import React from "react";

const LogoutButton = () => {

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("https://carvilla-production.up.railway.app/deconnexion", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },

      });
      if (response.ok) {
        localStorage.removeItem("token");
        console.log(response);  
      }
      console.log("Réponse du serveur:", response.data);
      window.location.href = "/";
    } catch (error) {
      console.error("Erreur lors de la requête d'insertion:", error);
  
    }
  };


  return (
    <button
      type="button"
      className="btn m-2 btn-outline-danger"
      onClick={logout}
    >
      <span className="fe fe-log-out fe-16 mr-2"></span>
      Logout
    </button>
  );
};

export default LogoutButton;
