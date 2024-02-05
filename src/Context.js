import { createContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [home, setHome] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [comment, setComment] = useState("");
  const [canCurrierCall, setCanCurrierCall] = useState(true);
  const [porch, setPorch] = useState("");
  return (
    <Context.Provider
      value={{
        name,
        setName,
        phone,
        setPhone,
        home,
        setHome,
        floor,
        setFloor,
        apartment,
        setApartment,
        comment,
        setComment,
        canCurrierCall,
        setCanCurrierCall,
        porch,
        setPorch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
