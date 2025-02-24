import { useState } from "react"

export const useInputValid = ({regexp, errorText}) => { // 커스텀 훅 함수 use로 시작하기 때문
    const [ name, setName ] = useState("");
    const [ value, setValue ] = useState("");
    const [ errorMessage, setErrorMessage ] = useState("");

    const handleOnChange = (e) => {
        setName(e.target.name)
        setValue(e.target.value);
    }

    const handleOnBlur = () => {
        const text = regexp.test(value) ? "" : errorText;
            setErrorMessage(text);
    }

    return { name, value, errorMessage, handleOnBlur, handleOnChange };
}