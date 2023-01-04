import { Cap } from "../Cap";
import FormConnect from "../Form/Form";
import { useState } from "react";
import { HistoryButton } from "../HistoryButton";
export function Translator(props) {
    const [lang, setLang] = useState('');
    const [langFrom, setLangFrom] = useState('');
    return (
        <div className={"Translator"}>
            <Cap setLang={setLang} setLangFrom={setLangFrom}/>
            <FormConnect lang={lang} langFrom = {langFrom}/>
            <HistoryButton/>
        </div>
    );
}