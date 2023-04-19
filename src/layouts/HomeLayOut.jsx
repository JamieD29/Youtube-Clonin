import React from 'react'
import Header from '../components/Nav/Header';
import VerticalBar from '../components/Nav/VerticalBar';
import HomeLayOutStyle from './scss/HomeLayout.module.scss'
import { Outlet } from 'react-router-dom';

const HomeLayOut = () => {
  return (
    <>
        <header>
            <nav >
                <Header/>
            </nav>
            <body >
                <section className={`${HomeLayOutStyle["home"]}`}>
                    <VerticalBar/>
                    <Outlet/>
                </section>
            </body>
        </header>
    </>
  )
}

export default HomeLayOut