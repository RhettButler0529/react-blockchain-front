import React, { useContext, useState } from "react";
import images from "../../../constants/images";

import { ThemeContext } from "../../../utils/theme/ThemeContext";

const SettingPage = ()=>{
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    return <div className="mt-5">Setting Page</div>
}

export default SettingPage;