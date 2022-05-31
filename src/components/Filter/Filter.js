import { useEffect, useState } from "react";

function Filter({ filterData, list }) {
  const [activeBtn, setActiveBtn] = useState(0);

  useEffect(() => {
    setActiveBtn(0);
    filterData("");
  }, [list]);

  return (
    <>
      <button
        className={activeBtn === 0 ? "selected-filter" : null}
        onClick={() => {
          filterData("");
          setActiveBtn(0);
        }}
      >
        Todos
      </button>
      <button
        className={activeBtn === 1 ? "selected-filter" : null}
        onClick={() => {
          filterData("entrada");
          setActiveBtn(1);
        }}
      >
        Entradas
      </button>
      <button
        className={activeBtn === 2 ? "selected-filter" : null}
        onClick={() => {
          filterData("saída");
          setActiveBtn(2);
        }}
      >
        Despesas
      </button>
    </>
  );
}

export default Filter;
