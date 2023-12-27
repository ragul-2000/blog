
import React from 'react';
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar/>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}
