/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import { CgPassword } from 'react-icons/cg';
import { RiCloseCircleFill } from 'react-icons/ri';
import { useUpdatePasswordMutation } from '../../../mutauions/accountMutation';
import Swal from 'sweetalert2';

function PasswordModal({ setOpen }) {
    const passwordMutation = useUpdatePasswordMutation();

    const [ passwordValue, setPasswordValue ] = useState({
        newPassword: "",
        confirmPassword: "",
    });

    const handlePasswordInputOnChange = (e) => {
        setPasswordValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSetButtonOnChlick = async () => {
        await passwordMutation.mutateAsync(passwordValue.newPassword);
        await Swal.fire({
            titleText: "새로운 비밀번호로 변경되었습니다.",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
            position: "center",
        });
        setOpen(false);
    }

    const handleCloseButtonOnClick = () => {
        setOpen(false);
    }
    return (
        <div>
            <div css={s.modalTop}>
                <div onClick={handleCloseButtonOnClick}><RiCloseCircleFill /></div>
            </div>
            <div css={s.header}>
                <div css={s.headerIcon}><CgPassword /></div>
                <h2 css={s.headerTitle}>Set a password</h2>
                <p css={s.headerMessage}>비밀번호는 최소 8~16자의 영문, 숫자 조합으로 사용하세요.</p>
            </div>
            <div>
                <div css={s.inputGroup}>
                    <label>Enter a new password</label>
                    <input type="password" name='newPassword'
                    value={passwordValue.newPassword}
                    onChange={handlePasswordInputOnChange} 
                    />
                </div>
                <div css={s.inputGroup}>
                    <label>Confirm your new password</label>
                    <input type="password" name='confirmPassword' 
                    value={passwordValue.confirmPassword} 
                    onChange={handlePasswordInputOnChange} 
                    />
                </div>
                <button 
                    css={s.setButton} 
                    disabled={!passwordValue.newPassword || !passwordValue.confirmPassword}
                    onClick={handleSetButtonOnChlick}
                >Set a password</button>
            </div>
        </div>
    );
}

export default PasswordModal;