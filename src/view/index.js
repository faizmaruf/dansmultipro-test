import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";
import CardJob from "../components/CardJob";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    loadItems();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    loadItems();
  }, [pageNumber]);

  const loadItems = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${pageNumber}`);
      const data = response.data;
      setItems((prevItems) => [...prevItems, ...data]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    } catch (error) {
      console.log(error, " << error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
      loadItems();
    }
  };

  console.log(isLoading, "Loading");
  return (
    <div className="container-main  flex flex-col gap-y-12 w-screen min-h-screen bg-slate-100 relative pb-12">
      <Header />
      <div className="container  w-100 h-100 relative my-24 flex flex-wrap gap-y-5">
        {items.map((item, i) => (
          <CardJob key={i} item={item} />
        ))}
        {isLoading && (
          <div className="w-96 md:w-[27rem] h-56  flex flex-col py-4 px-2 rounded-lg m-auto">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
