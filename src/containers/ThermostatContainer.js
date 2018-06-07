import { connect } from 'react-redux';
import DonutChart from "../components/ignore/DonutChart";
import Thermostat from "../components/Thermostat";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

let ThermostatContainer= connect(mapStateToProps);

export default ThermostatContainer;