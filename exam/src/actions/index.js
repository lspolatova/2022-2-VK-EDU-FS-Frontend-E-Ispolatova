import { GET_LANGUAGE_FAILURE } from "../components/constants/ActionTypes"
import { GET_LANGUAGE_REQUEST } from "../components/constants/ActionTypes"
import { GET_LANGUAGE_SUCCESS } from "../components/constants/ActionTypes"
import { GET_TRANSLATION_FAILURE } from "../components/constants/ActionTypes"
import { GET_TRANSLATION_REQUEST } from "../components/constants/ActionTypes"
import { GET_TRANSLATION_SUCCESS } from "../components/constants/ActionTypes"

const getLanguageSuccess = (language) => ({
    type: GET_LANGUAGE_SUCCESS,
    payload: language,
})

const getLanguageStarted = () => ({
    type: GET_LANGUAGE_REQUEST
})

const getLanguageFailure = (message) => ({
    type: GET_LANGUAGE_FAILURE,
    payload: message
})

let lang_list;
export const getLanguage = () => {
    return ((dispatch, getState) => {
        dispatch(getLanguageStarted())
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground'
            }
        };      
        fetch('https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0', options)
            .then(response => response.json())
            .then(response => {lang_list=response.dictionary;
                              dispatch(getLanguageSuccess(response))})
            .catch(err => dispatch(getLanguageFailure(err.message)));
    })
}

const getTranslationSuccess = (translation) => ({
    type: GET_TRANSLATION_SUCCESS,
    payload: translation,
})

const getTranslationStarted = () => ({
    type: GET_TRANSLATION_REQUEST
})

const getTranslationFailure = (message) => ({
    type: GET_TRANSLATION_FAILURE,
    payload: message
})

export const getTranslation = (text, lang) => {
    return ((dispatch, getState) => {
        dispatch(getTranslationStarted())
        if(!lang){
            dispatch(getTranslationSuccess("Выберите, пожалуйста, язык для перевода"))
            return
        }
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${text}"}]`
        };
        
        fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${lang}&api-version=3.0&profanityAction=NoAction&textType=plain`, options)
            .then(response => response.json())
            .then(response => {if(localStorage.getItem('colvo')){
                                   localStorage.setItem('colvo',parseInt(localStorage.getItem('colvo'))+1);
                                }else{
                                    localStorage.setItem('colvo',1)
                                }
                                let translate =[]
                                translate.push(lang_list[response[0].detectedLanguage.language].name);
                                translate.push(lang_list[lang].name);
                                translate.push(text);
                                translate.push(response[0].translations[0].text);
                                localStorage.setItem(localStorage.getItem('colvo'), translate)
                                dispatch(getTranslationSuccess(response[0].translations[0].text))})
            .catch(err => dispatch(getTranslationFailure(err.message))); 
    })
}