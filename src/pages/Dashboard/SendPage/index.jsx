import React, { useContext, useState } from "react";
import images from "../../../constants/images";

import { ThemeContext } from "../../../utils/theme/ThemeContext";

const SendPage = ()=>{
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    return <div className="mt-5">Send Page</div>
}

export default SendPage;