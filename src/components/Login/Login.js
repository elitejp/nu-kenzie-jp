import "./login.css";
import imgIndex from "../../image/imgIndex.svg";

function Login({ setLogged }) {
  return (
    <div className="login">
      <main>
        <div className="login-box">
          <div className="logo">
            <h2 className="nu">Nu</h2>
            <h2 className="kenzie">Kenzie</h2>
          </div>

          <h1>Centralize o controle das suas finanças</h1>

          <p>de forma rápida e segura</p>

          <button onClick={() => setLogged(true)}>Iniciar</button>
        </div>
        <img src={imgIndex} alt={""}></img>
      </main>
    </div>
  );
}

export default Login;
