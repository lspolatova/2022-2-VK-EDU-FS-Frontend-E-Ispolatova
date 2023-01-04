import './SelectLanguage.scss';
import {connect} from 'react-redux';
import { getLanguage } from '../../actions';
import React, {useEffect} from 'react';

function Options(props){
     if(props.language){
        let option = [];
        for (let element in props.language){
            option.push(<option key={props.language[element].name} value={element}>{props.language[element].name}</option>)
        }
        return option;
    }else{
        return <option value="Empty">Empty</option>;
    }
}

export function SelectLanguage(props) {
    let first_item;
    useEffect(() => {
        props.getLanguage();
    }, []);
    if(props.type=="from"){
        first_item = "auto";
    }else{
        first_item = "language";
    }
    return (
        <select name="language" className='SelectLanguage' onChange={(event) => props.setLang(event.target.value)}>
            <option value="">{first_item}</option>
            <Options language = {props.language[0]}/>
        </select>    
    );
}

const mapStateProps = (state) => ({
    language: state.language.language,
    loading: state.language.loading
})

let SelectLanguageConnect = connect(mapStateProps, {getLanguage})(SelectLanguage);
export default SelectLanguageConnect;