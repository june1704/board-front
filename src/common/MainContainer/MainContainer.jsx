/**@jsxImportSource @emotion/react */
import { FiChevronsRight } from 'react-icons/fi';
import { mainSidebarIsOpenState } from '../../atoms/mainSidebar/mainSidebarAtom';
import * as s from './style';
import React from 'react';
import { basicButton } from '../../styles/buttons';
import { useRecoilState } from 'recoil';

function MainContainer({ children }) {
    const [ isOpen, setOpen ] = useRecoilState(mainSidebarIsOpenState);

    const handleSidebarOpen = () => {
        setOpen(true)
    }
    return (
        <div css={s.container}>
            <header css={s.header}> 
                {
                    !isOpen &&
                    <span css={s.sidebarOpenButton}>
                        <button css={basicButton} onClick={handleSidebarOpen}><FiChevronsRight /></button>
                    </span>
                }
            </header>
            <main css={s.main}>
                {children}
            </main>
        </div>
    );
}

export default MainContainer;