import "../reset.css";
import "./home.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import List from "../List/List";
import TotalMoney from "../TotalMoney/TotalMoney";
import { useState } from "react";
import Filter from "../Filter/Filter";
import NoCard from "../../image/NoCard.svg";

function Home({ list, setList, setLogged }) {
  const [filteredList, setFilteredList] = useState(list);

  const submitData = (newItem) => {
    setList([...list, newItem]);
    // setFilteredList([...filteredList, newItem]);
  };

  const filterData = (tipo) => {
    setFilteredList(list.filter((data) => data.type.includes(tipo)));
  };

  const removeItem = (removedItem) => {
    setList(list.filter((item) => removedItem !== item));
    // setFilteredList(filteredList.filter((item) => removedItem !== item));
  };

  return (
    <>
      <Header setLogged={setLogged}></Header>
      <main>
        <aside className="form-total">
          <Form submitData={submitData}></Form>
          <TotalMoney list={list}></TotalMoney>
        </aside>

        <aside className="list-filter">
          <nav>
            <h2>Resumo Financeiro</h2>
            <div className="btn-filters">
              <Filter filterData={filterData} list={list}></Filter>
            </div>
          </nav>
          <ul>
            {list.length !== 0 ? (
              <>
                {filteredList.map((item, index) => (
                  <List key={index} item={item} removeItem={removeItem}></List>
                ))}
              </>
            ) : (
              <>
                <h1>Você ainda não possui nenhum lançamento</h1>
                <img src={NoCard} alt={"No Card"}></img>
              </>
            )}
          </ul>
        </aside>
      </main>
    </>
  );
}

export default Home;
