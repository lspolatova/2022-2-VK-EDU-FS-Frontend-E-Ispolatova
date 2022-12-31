import './Form.scss'
import { Output } from '../Output';
import {useState} from 'react';
import { connect} from 'react-redux';
import { getTranslation } from '../../actions';
export const Form = (props) => {
  const [message, setMessage] = useState('');
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      props.getTranslation(message, props.lang)
    }
  };
  return (
    <div className="text">
        <textarea
            onChange={event => setMessage(event.target.value)}
            onKeyDown={handleKeyDown}
        ></textarea>
        <Output translation = {props.translation} message = {message}/>
    </div>
  );
};

const mapStateProps = (state) => ({
    translation: state.translation.translation,
    loading: state.translation.loading
})

let FormConnect = connect(mapStateProps, {getTranslation})(Form);
export default FormConnect;