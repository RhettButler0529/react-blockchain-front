import React, { useContext, useState } from "react";
import images from "../../../constants/images";

import { ThemeContext } from "../../../utils/theme/ThemeContext";

const TransPage = ()=>{
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    return <div className="mt-5">Transactions Page</div>
}

export default TransPage;