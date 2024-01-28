import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState(null);
  // const [redirectToHome, setRedirectToHome] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("https://aromatic-fork-production.up.railway.app/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "admin@gmail.com",
          mdp: "admin",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log(data);

        if (token == null) {
          window.location.href = "/";
        } else {
          localStorage.setItem("token", token);
          // setRedirectToHome(true);
          navigate("/home");
        }
      } else {
        console.log("huhuhuhhu");
        setError(
          "Erreur d'authentification. Veuillez vérifier vos informations."
        );
      }
    } catch (error) {
      console.error("Erreur lors de la requête d'authentification:", error);
      setError("Erreur d'authentification. Veuillez réessayer plus tard.");
    }
  };

  
  return (
    <>
      <div className="wrapper vh-100">
        <div className="row align-items-center h-100">
          <form
            className="col-lg-3 col-md-4 col-10 mx-auto text-center"
          >
            <a
              className="navbar-brand mx-auto mt-2 flex-fill text-center"
              href="./index.html"
            >
              <svg
                version="1.1"
                id="logo"
                className="navbar-brand-img brand-sm"
                x="0px"
                y="0px"
                viewBox="0 0 120 120"
              >
                <g>
                  <polygon className="st0" points="78,105 15,105 24,87 87,87" />
                  <polygon className="st0" points="96,69 33,69 42,51 105,51" />
                  <polygon className="st0" points="78,33 15,33 24,15 87,15" />
                </g>
              </svg>
            </a>
            <h1 className="h6 mb-3">Sign in</h1>
            <div className="form-group">
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="inputEmail"
                className="form-control form-control-lg"
                placeholder="Email address"
                required
                // autofocus=""
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="inputPassword"
                className="form-control form-control-lg"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div classNameName="alert alert-danger">{error}</div>}

            <button onClick={handleLogin} className="btn btn-lg btn-primary btn-block" type="submit">
              Let me in
            </button>
            <p className="mt-5 mb-3 text-muted">© 2020</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
