import { Home } from "../Layout/Main/Home";
import React from 'react'
import { Header } from "../Layout/Header/Header";

export const HomePage = () => {
  return (
    <div id="page">
      <Header></Header>
      <Home/>
    </div>
  )
}
