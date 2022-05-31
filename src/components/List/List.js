import "./list.css";
import { FaTrash } from "react-icons/fa";

function List({ item, removeItem }) {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <li>
        <div className={`border-type ${item.type}`}></div>

        <div className="detail-box">
          <h2>{item.description}</h2>
          <p>{capitalize(item.type)}</p>
        </div>

        <h3>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(item.value)}
        </h3>

        <div className="icon-trash" onClick={() => removeItem(item)}>
          <FaTrash style={{ color: "#5B6166", width: "8.5px" }}></FaTrash>
        </div>
      </li>
    </>
  );
}

export default List;
