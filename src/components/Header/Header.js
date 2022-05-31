import "../reset.css";
import "./header.css";

function Header({ setLogged }) {
  return (
    <>
      <header>
        <div className="logo">
          <h1 className="nu">Nu</h1>
          <h1 className="kenzie">Kenzie</h1>
        </div>
        <nav>
          <button onClick={() => setLogged(false)}>Inicio</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
