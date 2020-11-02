import React from 'react';
import { Suspense, lazy } from 'react';
import '../../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MockData from '../mockdata.json'
import '../Navbar.css';
const Photos = lazy(() => import('../Photos.js'));


    


export default function Home() {
    return <>
        <br/>
        <h1 style={{ textAlign: "center" }}>Image Gallery</h1>
        <br/>
        <Suspense fallback={
            < div > Loading...</div>}>
        <Photos />
        </Suspense>
        <br />
        <br />
        <br />

        {MockData.map((mockdata, index) => {
            return <div style={{ textAlign: "center" }}>
                <h1>{mockdata.title}</h1>
                <p>{mockdata.content}</p>
            </div>
        })}
        </>
    
    
}