import { useState } from "react";
import moment from "moment";
import Persons from "../components/Person/Persons";
import Header from "../components/common/Header";
import api from "../pages/api/api";
import NewPerson from "../components/Person/NewPerson";
import { ToastContainer, toast } from "react-toastify";
import Search from "../components/common/Search";
import axios from "axios";

export default function Home() {
  // create useState
  // Array data saving
  const [getPersons, setPersons] = useState([]);
  // single data Person
  const [getSinglePerson, setSinglePerson] = useState("");
  // single data Information
  const [getSingleInformation, setSingleInformation] = useState("");
  // Input search
  const [searchTerm, setSearchTerm] = useState("");
  // Save what we saved and compare it
  const [searchResults, setSearchResults] = useState([]);
  // Handle selection Radio
  const [getformData, setFromData] = useState("");
  // Handle get Data Api
  const [getdataApi, setdataApi] = useState([]);
  // handle Radio
  const handleRadio = (event) => {
    const value = event.target.value;
    setFromData(value);
  };
  // handle get Api Person
  const getApiPerson = async () => {
    const response = await api.get("/api");
    const data = response.data.User;
    setdataApi(data);
  };
  // handle Delete Person
  const handleDeletePerson = async (_id) => {
    await api.delete(`/api/${_id}`);
    // send message Error
    toast.error(` Deleted successfull`, {
      position: "top-right",
      closeOnClick: true,
    });
  };
  // handle New Person
  const handleNewPerson = () => {
    const persons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      date: moment().subtract(10, "days").calendar(),
      fullname: getSinglePerson,
      radio: getformData,
      information: getSingleInformation,
    };
    if (
      (person.fullname !== "" && person.fullname !== " ") ||
      (person.information !== "" && person.information !== " ")
    ) {
      persons.push(person);
      getApiPerson();
      setPersons(persons);
      // send message successfull
      toast.success("saveing successfull.", {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
      setSinglePerson("");
      setSingleInformation("");
      // send Data to the database
      axios.post("http://localhost:3001/api", person);
    }
  };
  // handle Clear input after saveing
  const setPerson = (event) => {
    setSinglePerson(event.target.value);
  };
  // handle Clear input after saveing
  const setInformation = (event) => {
    setSingleInformation(event.target.value);
  };
  // handle searchBox
  const searchHandler = (searchTern) => {
    const persons = getdataApi;
    setSearchTerm(searchTern);
    if (searchTerm !== "") {
      const newContactList = persons.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(persons);
    }
  };
  return (
    <div>
      <Header persons={getdataApi} />
      <NewPerson
        persons={getPersons}
        newPerson={handleNewPerson}
        person={getSinglePerson}
        radio={handleRadio}
        information={getSingleInformation}
        setPerson={setPerson}
        setInformation={setInformation}
      />

      <ToastContainer />
      <Search term={searchTerm} searchKeyword={searchHandler} />
      <Persons
        shoapi={searchTerm.length < 1 ? getdataApi : searchResults}
        information={getSingleInformation}
        deletePerson={handleDeletePerson}
      />
    </div>
  );
}
