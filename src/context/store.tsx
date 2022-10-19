import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getPoems } from "../api/getPoems";
import { Poem } from "../models";
import { enrichAuthorsData } from "../utility/enrichAuthorsData";

interface StoreProviderProps {
  children: ReactNode;
}

interface StoreContext {
  poetryData: Poem[];
}

const defaultStore = {
  poetryData: [],
};

const store = createContext<StoreContext>(defaultStore);

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [poetryData, setPoetryData] = useState<Poem[]>([]);

  useEffect(() => {
    getPoems()
      .then((data) => enrichAuthorsData(data))
      .then((data) => setPoetryData(data));
  }, []);

  return <store.Provider value={{ poetryData }}>{children}</store.Provider>;
};

const useStore = () => {
  const ctx = useContext(store);

  if (!ctx) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return ctx;
};

export { StoreProvider, useStore };
