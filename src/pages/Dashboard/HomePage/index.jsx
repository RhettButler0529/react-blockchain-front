import React, { useContext, useState } from "react";
import images from "../../../constants/images";

import { ThemeContext } from "../../../utils/theme/ThemeContext";

const HomePage = ()=>{
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    return (
        <div id="home-page">
            
        </div>
    )
}

export default HomePage;