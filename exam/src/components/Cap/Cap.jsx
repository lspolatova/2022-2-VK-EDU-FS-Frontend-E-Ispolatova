import './Cap.scss';
import SelectLanguageConnect from '../SelectLanguage/SelectLanguage';
import { Form } from '../';

export function Cap(props) {
    return (
        <div className={"Cap"}>
            DETECT LANGUAGE
            <SelectLanguageConnect/>
            <SelectLanguageConnect setLang = {props.setLang}/>
        </div>      
    );
}