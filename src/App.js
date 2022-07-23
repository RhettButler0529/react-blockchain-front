import { useEffect, useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, AuthContext } from './utils/theme/ThemeContext';

import './css/custom.css';
import "react-multi-carousel/lib/styles.css";

import LandPages from './pages';

import LoginPages from './pages/Auth/login';
import RegisterPages from './pages/Auth/register';
import AuthSuccessPages from './pages/Auth/auth-success';
import RecoverPassPages from './pages/Auth/recover-pass';
import AuthVerificationPages from './pages/Auth/auth-verification';
import ResetPassPages from './pages/Auth/reset-pass';

import SelectWalletAccount from "./pages/Account/index";
import WalletConnect from "./pages/Account/connect";
import WallectActivation from "./pages/Account/activation";
import DashboardLayout from './pages/Dashboard/DashboardLayout';
import CryptoTokenInfoPage from './pages/Dashboard/CryptoTokenInfoPage';
import ReceivePage from './pages/Dashboard/Receive';
import HomePage from './pages/Dashboard/HomePage';
import SendPage from './pages/Dashboard/SendPage';
import BuyLicensePage from './pages/Dashboard/BuyLicensePage';
import TradePage from './pages/Dashboard/TradePage';
import TransPage from './pages/Dashboard/TransPage';
import AccessHistoryPage from './pages/Dashboard/AccessHistoryPage';
import ContactsPage from './pages/Dashboard/ContactsPage';
import SettingPage from './pages/Dashboard/SettingPage';

const App = () => {
  const [theme, setTheme] = useState(true);
  const [hambugerMenu, setHambugerMenu] = useState(false);
  const [isAuth, setAuth] = useState(false);

  useEffect(() =>
    !theme
      ? window.document.body.classList.add('dark')
      : window.document.body.classList.remove('dark'),
    [theme]
  )

  const themeParam = {
    toggleTheme: () => setTheme(!theme),
    isToggle: theme,
    toggleHambugerMenu: () => setHambugerMenu(!hambugerMenu),
    isToggleMenu: hambugerMenu
  }

  const authParam = {
    setLogin: () => setAuth(true),
    setLouout: () => setAuth(false),
    isAuthStatus: isAuth
  }

  return (
    <ThemeContext.Provider value={themeParam}>
      <AuthContext.Provider value={authParam}>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandPages />} />
            <Route exact path="auth/login" element={<LoginPages />} />
            <Route exact path="auth/register" element={<RegisterPages />} />
            <Route exact path="auth/auth-success" element={<AuthSuccessPages />} />
            <Route exact path="auth/recover-password" element={<RecoverPassPages />} />
            <Route exact path="auth/auth-verification" element={<AuthVerificationPages />} />
            <Route exact path="auth/reset-password" element={<ResetPassPages />} />
            <Route exact path="wallet/selwallet" element={<SelectWalletAccount />} />
            <Route exact path="wallet/connect" element={<WalletConnect />} />
            <Route exact path="wallet/activation" element={<WallectActivation />} />
            <Route exact path="/home" element={<DashboardLayout>
              <HomePage></HomePage>
            </DashboardLayout>} />
            <Route exact path="/crypto-token-info" element={<DashboardLayout>
              <CryptoTokenInfoPage></CryptoTokenInfoPage>
            </DashboardLayout>} />
            <Route exact path="/receive" element={<DashboardLayout>
              <ReceivePage></ReceivePage>
            </DashboardLayout>} />
            <Route exact path="/send" element={<DashboardLayout>
              <SendPage></SendPage>
            </DashboardLayout>} />
            <Route exact path="/buy-license" element={<DashboardLayout>
              <BuyLicensePage></BuyLicensePage>
            </DashboardLayout>} />
            <Route exact path="/trade" element={<DashboardLayout>
              <TradePage></TradePage>
            </DashboardLayout>} />
            <Route exact path="/transactions" element={<DashboardLayout>
              <TransPage></TransPage>
            </DashboardLayout>} />
            <Route exact path="/access-history" element={<DashboardLayout>
              <AccessHistoryPage></AccessHistoryPage>
            </DashboardLayout>} />
            <Route exact path="/contacts" element={<DashboardLayout>
              <ContactsPage></ContactsPage>
            </DashboardLayout>} />
            <Route exact path="/setting" element={<DashboardLayout>
              <SettingPage></SettingPage>
            </DashboardLayout>} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App