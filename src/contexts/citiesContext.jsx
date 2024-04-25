/* eslint-disable react/prop-types */
import { useMemo, createContext, useState, useEffect, useContext } from "react";

const BASE_URL = "http://localhost:8080";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  const memoizedValue = useMemo(
    () => ({
      cities,
      isLoading,
      currentCity,
      getCity,
    }),
    [cities, isLoading, currentCity]
  );

  return (
    <CitiesContext.Provider value={memoizedValue}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const contextValue = useContext(CitiesContext);
  if (contextValue === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return contextValue;
}

export { CitiesProvider, useCities };
