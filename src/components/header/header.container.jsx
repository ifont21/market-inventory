import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Header from "./header.component";
import { connect } from "react-redux";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const HeaderContainer = compose(withRouter, connect(mapStateToProps))(Header);

export default HeaderContainer;
