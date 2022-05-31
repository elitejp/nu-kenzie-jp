import "./totalMoney.css";

function TotalMoney({ list }) {
  const totalValue = list.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="balance-box">
      <div className="total-box">
        <h2>Valor Total:</h2>
        <span>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(totalValue)}
        </span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
