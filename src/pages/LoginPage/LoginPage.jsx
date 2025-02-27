/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import { SiGoogle, SiKakao, SiNaver } from "react-icons/si";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import ValidInput from '../../components/auth/ValidInput/ValidInput';
import { useLoginMutation } from '../../mutauions/authMutation';
import Swal from 'sweetalert2'
import { setTokenLocalStorage } from '../../configs/axiosConfig';
import { useQueryClient } from '@tanstack/react-query';


function LoginPage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const loginMutation = useLoginMutation();

    const [ searchParams, setSearchParams ] = useSearchParams();
    
    const [ inputValue, setInputValue ] = useState({
        username: searchParams.get("username") || "",
        password: "",
    })

    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const [ inputValidError, setInputValidError ] = useState({
        username: false,
        password: false,
    });

    const handlePasswordOnFocus = () => {
        setInputValue(prev => ({
            ...prev,
            password: "",
        }));
    }

    const handleLoginOnClick = async () => {
        try {
            const response = await loginMutation.mutateAsync(inputValue);
            const tokenName = response.data.name;
            const accessToken = response.data.token;
            setTokenLocalStorage(tokenName, accessToken);
            await Swal.fire({
                position: "center",
                icon: "success",
                title: "로그인 성공!",
                timer: 1000,
                showConfirmButton: false,
              });
              await queryClient.invalidateQueries({queryKey: ["userMeQuery"]});
              navigate("/");
        } catch(error) {
            await Swal.fire({
                title: '에러',
                text: '당신은 로그인이 실패해서 죽었습니다',
                confirmButtonText: '부활?',
                confirmButtonColor: '#2383e2'
              })

        }
    }

    return (
        <div css={s.layout}>
            <div>
                <header>
                    <h1 css={s.title1}>Think it. Make it.</h1>
                    <h1 css={s.title2}>Log in to your Board account</h1>
                </header>
                <main>
                    <div css={s.oauth2Group}>
                        <div css={s.groupBox}>
                            <button css={s.oauth2Button}>
                                <div css={s.oauth2Icon}><SiGoogle /></div>
                                <span css={s.oauth2Text}>Continue with Google</span>
                            </button>
                        </div>
                        <div css={s.groupBox}>
                            <button css={s.oauth2Button}>
                                <div css={s.oauth2Icon}><SiNaver /></div>
                                <span css={s.oauth2Text}>Continue with Naver</span>
                            </button>
                        </div>
                        <div css={s.groupBox}>
                            <button css={s.oauth2Button}>
                                <div css={s.oauth2Icon}><SiKakao /></div>
                                <span css={s.oauth2Text}>Continue with Kakao</span>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div css={s.groupBox}>
                            <ValidInput type={"text"} placeholder={"Enter your username..."}
                                name={"username"}
                                value={inputValue.username}
                                onChange={handleInputOnChange}
                                setInputValueError={setInputValidError}
                            />
                        </div>
                        <div css={s.groupBox}>
                            <ValidInput type={"password"} placeholder={"password..."}
                                name={"password"}
                                value={inputValue.password}
                                onChange={handleInputOnChange}
                                onFocus={handlePasswordOnFocus}
                                setInputValueError={setInputValidError}
                            />
                        </div>
                        <p css={s.accountMessage}>
                            계정이 없으시다면 지금 가입하세요. <Link to={"/auth/join"}>회원가입</Link>
                        </p>
                        <div css={s.groupBox}>
                            <button css={s.accountButton} onClick={handleLoginOnClick}>Login</button>
                        </div>
                    </div>
                </main>
                <footer>
                    <p css={s.footerAgreement}>
                        이메일을 사용하여 계정을 구분하고 다른 사용자들에게 게시글을 공유합니다.
                        계속 진행하려면 약관 및 개인정보 보호정책을 이해하고 동의한다는 것을 인정해야합니다.
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default LoginPage;