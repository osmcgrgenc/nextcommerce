import React from 'react';
import HeaderTop from "@components/layouts/header/header-top";
import HeaderMiddle from "@components/layouts/header/header-middle";
import HeaderBottom from "@components/layouts/header/header-bottom";

export default function Header() {
    return (
        <>
            <header className="header header-2 header-intro-clearance">
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>

        </>
    );

}

