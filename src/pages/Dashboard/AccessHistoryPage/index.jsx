import React, { useContext, useState } from "react";
import images from "../../../constants/images";

import { ThemeContext } from "../../../utils/theme/ThemeContext";

const AccessHistoryPage = ()=>{
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    return <div className="mt-5">AccessHistoryPage</div>
}

export default AccessHistoryPage;