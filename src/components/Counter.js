import React from 'react';
// import {connect} from "react-redux";

function Counter(props) {
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     count:state.currentCount
//   }
// }

// let CounterContainer = connect(mapStateToProps)(Counter);
// export default CounterContainer;

//send redux specific code into containers folder ina  new counter container folder. then import counter into that file. 