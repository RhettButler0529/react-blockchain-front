import React, { useContext, useState } from "react";
import images from "../../../constants/images";

import { ThemeContext } from "../../../utils/theme/ThemeContext";

const TradePage = ()=>{
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    return <div className="mt-5">Trade Page</div>
}

export default TradePage;