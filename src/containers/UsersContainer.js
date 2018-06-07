import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import {setCurrentUserSort} from "../actions";
import Users from "../components/Users";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

let UsersContainer= connect(mapStateToProps);

export default UsersContainer;