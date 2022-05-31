import "./form.css";
import { useState } from "react";

function Form({ submitData }) {
  const [detail, setDetail] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState("entrada");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitData({ description: detail, type: tipo, value: valor });
        }}
      >
        <label>Descrição</label>
        <input
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          className="detail"
          value={detail}
          onChange={(event) => setDetail(event.target.value)}
        />
        <p>Ex: Compra de roupas</p>

        <div className="value-type-box">
          <div className="value-box">
            <label>Valor</label>
            <input
              type="number"
              inputMode="decimal"
              className="value"
              value={valor}
              onChange={(event) => setValor(Number(event.target.value))}
            />
          </div>

          <div className="type-box">
            <label>Tipo de valor</label>
            <select
              value={tipo}
              onChange={(event) => setTipo(event.target.value)}
            >
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>

        <button type="submit">Lançar</button>
      </form>
    </>
  );
}

export default Form;
