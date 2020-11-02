import React, { Component } from 'react';
import { Suspense, lazy } from 'react';
import '../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Photos from './photos.json'
import './Navbar.css';

export default () => {
    var settings = {
        centermode: true,
        lazyLoad: 'ondemand',
        centerPadding: '30px',
        padding: '50px',
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: '30px',
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '30px',
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '30px',
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    }

    return (<>
        <Slider {...settings}>
            {
                Photos.map((photos) => {
                    return (
                        <div>
                            <img width='100%' src={photos.url} />
                        </div>
                    )
                })}
        </Slider>
    </>
    );
}