import Header from "./header.component";
import React, { useContext } from "react";
import { UserContext } from "../../providers/user/userProvider";

const withHeaderData = (WrappedComponent) => (props) => {
  const { currentUser, loadUser } = useContext(UserContext);

  return (
    <WrappedComponent
      currentUser={currentUser}
      loadUser={loadUser}
      {...props}
    />
  );
};

const HeaderContainer = withHeaderData(Header);

export default HeaderContainer;
