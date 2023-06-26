import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

const LocaleContext = React.createContext({
  locale: null,
  setLocale: () => {},
  toggleLocale: () => {},
});

function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(localStorage.getItem("id") || "en");

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "id" : "en";
    setLocale(newLocale);
  };
  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export { LocaleContext, LocaleProvider };

LocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
