import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css";
import CardJob from "../components/CardJob";
import Header from "../components/Header";
import Loading from "../components/Loading";
import OptionBar from "../components/OptionBar";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("");
  const [option, setOption] = useState({
    location: null,
    job_type: null,
  });

  useEffect(() => {
    loadItems();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    loadItems();
  }, [pageNumber]);
  useEffect(() => {
    filterItems(option);
  }, [option]);

  const loadItems = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${pageNumber}`);
      const data = response.data;
      setItems((prevItems) => [...prevItems, ...data]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    } catch (error) {
      console.log(error, " << error");
    } finally {
      setIsLoading(false);
    }
  };
  const searchItems = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${query}`);
      const data = response.data;
      setItems(data);
    } catch (error) {
      console.log(error, " << error");
    } finally {
      setIsLoading(false);
    }
  };
  const filterItems = async (filter) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://dev3.dansmultipro.co.id/api/recruitment/positions.json?${filter.location ? "&location=" + filter.location : ""}${filter.job_type ? "&full_time=" : ""}${filter.job_type == "full_time" ? "true" : ""}`);
      const data = response.data;
      setItems(data);
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

  const handleInputChange = (e) => {
    setQuery(e);
  };

  const optionLocation = {
    id: 1,
    name: "Location",
    data: [
      {
        id: 1,
        value: "remote",
        name: "Remote",
      },
      {
        id: 2,
        value: "berlin",
        name: "Berlin",
      },
    ],
  };
  const optionJobType = {
    id: 2,
    name: "Job Type",
    data: [
      {
        id: 1,
        value: "full_time",
        name: "Full Time",
      },
      {
        id: 2,
        value: "part_time",
        name: "Part Time",
      },
      {
        id: 3,
        value: "internship",
        name: "Internship",
      },
    ],
  };

  const onSelectOption = (e, idOptions) => {
    if (idOptions === 1) {
      setOption((prevState) => ({
        ...prevState,
        location: e,
      }));
    } else {
      setOption((prevState) => ({
        ...prevState,
        job_type: e,
      }));
    }
  };

  return (
    <div className="container-main  flex flex-col gap-y-12 w-screen min-h-screen bg-slate-100 relative pb-12">
      <Header />
      <div className="container  w-100 h-100 relative my-24 flex flex-wrap gap-y-5">
        <div className="w-full flex gap-x-2">
          <div className="basis-8/12">
            <SearchBar query={query} handleInputChange={handleInputChange} searchItems={searchItems} loadItems={loadItems} />
          </div>
          <div className="basis-2/12">
            <OptionBar options={optionLocation} onSelectOption={onSelectOption} />
          </div>
          <div className="basis-2/12">
            <OptionBar options={optionJobType} onSelectOption={onSelectOption} />
          </div>
        </div>

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
