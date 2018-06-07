import { connect } from 'react-redux';

import CurrentCity from "../components/CurrentCity";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    text: state.currentCity
  }
}

let CurrentCityContainer= connect(mapStateToProps);

export default CurrentCityContainer;
