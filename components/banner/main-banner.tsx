import React from 'react';
import Link from "next/link";
import Image from "next/image";

function MainBanner() {
    return (
        <div className="intro-slider-container">
            <div className="owl-carousel owl-simple owl-light owl-nav-inside" data-toggle="owl"
                 data-owl-options='{"nav": false}'>
                <div className="intro-slide">
                    <div className="container intro-content">
                        <h3 className="intro-subtitle">Bedroom Furniture</h3>
                        <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>

                        <Link href="/">
                            <a className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </Link>
                    </div>
                    <Image
                        src="/assets/images/demos/demo-2/slider/slide-3.jpg"
                        alt="Slide Image"
                        layout='fill'
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="intro-slide">
                    <div className="container intro-content">
                        <h3 className="intro-subtitle">Bedroom Furniture</h3>
                        <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>

                        <Link href="/">
                            <a className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </Link>
                    </div>
                    <Image
                        src="/assets/images/demos/demo-2/slider/slide-3.jpg"
                        alt="Slide Image"
                        layout='fill'
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="intro-slide">
                    <div className="container intro-content">
                        <h3 className="intro-subtitle">Bedroom Furniture</h3>
                        <h1 className="intro-title">Find Comfort <br />That Suits You.</h1>
                        <Link href="/">
                            <a  className="btn btn-primary">
                                <span>Shop Now</span>
                                <i className="icon-long-arrow-right"></i>
                            </a>
                        </Link>

                    </div>
                    <Image
                        src="/assets/images/demos/demo-2/slider/slide-3.jpg"
                        alt="Slide Image"
                        layout='fill'
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <span className="slider-loader text-white"></span>
        </div>
    );
}

export default MainBanner;
