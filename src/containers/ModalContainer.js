import { connect } from 'react-redux';
import Modal from "../components/Modal";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

let ModalContainer= connect(mapStateToProps);

export default ModalContainer;