import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getUserLogged } from "../utils/network-data";

const UserContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const value = useMemo(
    () => ({
      currentUser,
      setCurrentUser,
    }),
    [currentUser]
  );

  useEffect(() => {
    async function getUser() {
      await getUserLogged().then(({ data }) => {
        setCurrentUser(data);
        setTimeout(() => {}, 1000);
      });
    }
    getUser();
}, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
