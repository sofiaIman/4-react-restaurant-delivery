import React from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { MainContainer } from "./components";
import { CreateContainer } from "./components";
import { AnimatePresence } from "framer-motion";



function App() {
  return (
    <AnimatePresence>
    <div className="w-screen h-auto flex flex-col bg-primary ">
      <Header />
      <main className="mt-24 p-8 w-full"> 
      <Routes>
        <Route path='/' element = {<MainContainer />}/>
        <Route path='/createItem' element = {<CreateContainer/>} />
        <Route />
      </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
