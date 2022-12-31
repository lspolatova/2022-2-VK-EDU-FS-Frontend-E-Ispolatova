import { Cap } from "../Cap";
import FormConnect from "../Form/Form";
import { useState } from "react";
import { HistoryButton } from "../HistoryButton";
export function Translator(props) {
    const [lang, setLang] = useState('');
    return (
        <div className={"Translator"}>
            <Cap setLang={setLang}/>
            <FormConnect lang={lang}/>
            <HistoryButton/>
        </div>
    );
}