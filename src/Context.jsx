import { createContext, useContext } from "react";
import { Alert } from "@mui/material";
import { useState } from "react";
import { SnackBar } from "./components";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// Configurando o supabase
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  import.meta.env.VITE_APP_SUPABASE_URL,
  import.meta.env.VITE_APP_SUPABASE_API_KEY
);

// 1st step - App Context nulo
const AppContext = createContext(null);
const timeoutDuration = 4000;

// 2nd step - Provedor do contexto
const AppProvider = ({ children }) => {
  // x step - Internationalization
  const { t: translate, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // 3rd step - functions for shared state

  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const [alertMessage, setAlertMessage] = useState(null);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertVariant, setAlertVariant] = useState(null);

  const showSnackMessage = (message) => {
    setSnackMessage(message);
    setSnackOpen(true);
  };

  function chooseLanguage() {
    console.log("estou escolhendo um idioma.");
  }

  const showAlertMessage = (message, severity, variant) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setAlertVariant(variant);

    setTimeout(() => {
      setAlertMessage("");
    }, timeoutDuration);
  };

  const handleClose = () => {
    setSnackMessage("");
    setSnackOpen(false);
  };

  // 4rd step - shared state
  const sharedState = {
    chooseLanguage,
    changeLanguage,
    showSnackMessage,
    showAlertMessage,
    supabase,
    translate,
  };

  useEffect(() => {
    const storeLanguage = localStorage.getItem("language");

    if (storeLanguage) {
      changeLanguage(storeLanguage);
    } else {
      const navLang = navigator.language.split("-")[0];
      changeLanguage(navLang);
    }
  }, []);

  // 5th step - retornar o useContext sem expor o AppContext
  return (
    <AppContext.Provider value={sharedState}>
      {children}
      <SnackBar
        autoHideDuration={timeoutDuration}
        onClose={handleClose}
        open={snackOpen}
        message={snackMessage}
      />

      {alertMessage ? (
        <Alert severity={alertSeverity} sx={{ mt: -10 }}>
          {alertMessage}
        </Alert>
      ) : null}
    </AppContext.Provider>
  );
};

export default AppProvider;

// 6th step - Hook para usar o contexto é padrão, precaver que o contexto não carregue nulo
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
