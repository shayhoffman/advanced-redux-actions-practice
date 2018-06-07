import { connect } from 'react-redux';

import Counter from "../components/Counter";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    count: state.currentCount
  }
}

let CounterContainer= connect(mapStateToProps);

export default CounterContainer;