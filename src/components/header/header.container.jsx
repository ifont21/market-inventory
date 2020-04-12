import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Header from "./header.component";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser)),
});

const HeaderContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);

export default HeaderContainer;
