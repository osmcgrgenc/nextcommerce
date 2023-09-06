import React from 'react';
import Link from "next/link";
import Image from "next/image";

function Brands(props) {
    return (
        <div className="brands-border owl-carousel owl-simple" data-toggle="owl"
             data-owl-options='{
                "nav": false,
                "dots": false,
                "margin": 0,
                "loop": false,
                "responsive": {
                    "0": {
                        "items":2
                    },
                    "420": {
                        "items":3
                    },
                    "600": {
                        "items":4
                    },
                    "900": {
                        "items":5
                    },
                    "1024": {
                        "items":6
                    },
                    "1360": {
                        "items":7
                    }
                }
            }'>
            <Link href="" className="brand">
                <div className="brand">
                    <Image
                        src="/assets/images/brands/1.png"
                        alt="Brand Name"
                        width={100}
                        height={30}
                    />
                </div>

            </Link>

            <Link href="">
                <div className="brand">
                    <Image
                        src="/assets/images/brands/2.png"
                        alt="Brand Name"
                        width={100}
                        height={30}
                    />
                </div>

            </Link>

            <Link href="">
                <div className="brand">
                    <Image
                        src="/assets/images/brands/3.png"
                        alt="Brand Name"
                        width={100}
                        height={30}
                    />
                </div>

            </Link>

            <Link href="">
                <div className="brand">
                    <Image
                        src="/assets/images/brands/3.png"
                        alt="Brand Name"
                        width={100}
                        height={30}
                    />
                </div>

            </Link>
            <Link href="">
                <div className="brand">
                    <Image
                        src="/assets/images/brands/3.png"
                        alt="Brand Name"
                        width={100}
                        height={30}
                    />
                </div>

            </Link>
            <Link href="">
                <div className="brand">
                    <Image
                        src="/assets/images/brands/3.png"
                        alt="Brand Name"
                        width={100}
                        height={30}
                    />
                </div>

            </Link>
            <Link href="">
                <div className="brand">
                    <Image
                        src="/assets/images/brands/3.png"
                        alt="Brand Name"
                        width={100}
                        height={30}
                    />
                </div>

            </Link>

        </div>
    );
}

export default Brands;
