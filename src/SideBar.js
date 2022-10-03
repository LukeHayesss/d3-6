import React from "react";
import {FaGithub, FaGlobe} from 'react-icons/fa';
import $ from 'jquery';

export const SideBar = () => {
    return (
        <>
        <div className="sidenav">
            <a href="https://github.com/LukeHayesss"><FaGithub/></a>
            <span onClick={() => {$('.graticule').toggle()}}>
                <i><FaGlobe/></i>
            </span>
            </div>
            </>
    );
};
