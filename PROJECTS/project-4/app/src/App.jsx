import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_UR = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodDate = async () => {
      setLoading(true);
      try {
        //backend se data uthaya h fetch k through
        const respons = await fetch(BASE_UR);
        // fir us data ko json me convert kiya hai
        const json = await respons.json();
        // fis sbhi data ko setData me daal diya h
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fatch data");
      }
    };
    fetchFoodDate();
  }, []);

  const searchFood = (e) => {
    const SearchValue = e.target.value;

    if (SearchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(SearchValue.toLowerCase()),
    );

    setFilteredData(filter);
  };

  const  filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase()),
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "all",
      type: "all",
    },
    {
      name: "breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "Lunch",
    },
    {
      name: "Dinner",
      type: "Dinner",
    },
  ];

  //jb v website open hogi to ye loading dikhayega jb tk website run nhi ho jati
  //agar website run me koi problem aati hai to ye Unable to data fetch dikhayega jo humne catch me ke likha hai
  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="Foody Zone.png" alt="" />
          </div>

          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      color: white;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f01d1d;
  }
`;
