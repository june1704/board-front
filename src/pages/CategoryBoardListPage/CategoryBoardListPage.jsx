/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useRef } from 'react';
import { GrView } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';
import { useParams } from 'react-router-dom';
import { useGetCategoryBoardList } from '../../queries/boardQuery';

function CategoryBoardListPage(props) {
    const params = useParams();
    const categoryboardList = useGetCategoryBoardList(params.categoryName);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        console.log
    }, [categoryboardList.data])

    useEffect(() => {
        const observerCallback = (entries) => {
            const [ entry ] = entries;
            if(entry.isIntersecting) {
                categoryboardList.fetchNextPage();
            }
        }

        const observerOption = {
            // 올라갈 때 얼마만큼 보일 건가
            threshold: 1.0
        }

        const observer = new IntersectionObserver(observerCallback, observerOption);
        observer.observe(loadMoreRef.current); // 옵저버가 화면을 감시하겠다.
    }, []);

    // <div ref={loadMoreRef}></div> 감시될 디비전
    return (
        <div css={s.scrollLayout}>
            <div css={s.cardLayoutGroup}>
                {
                    categoryboardList.isLoading ||
                    categoryboardList.data.pages.map(page => 
                        page.data.boardSearchList.map(boardList =>
                            <div key={boardList.boardId} css={s.cardLayout}>
                                <header>
                                    <div css={s.headerLeft}>
                                        <div css={s.profileImgBox}>
                                            <img src={`http://localhost:8080/image/user/profile/${boardList.profileImg}`} alt="" />
                                        </div>
                                        <span>{boardList.nickname}</span>
                                    </div>
                                    <div css={s.boardCounts}>
                                        <span>
                                            <GrView />
                                            <span>{boardList.likeCount}</span>
                                        </span>
                                        <span>
                                            <FcLike />
                                            <span>{boardList.viewCount}</span>
                                        </span>
                                    </div>
                                </header>
                                <main>
                                    <h2 css={s.boardTitle}>{boardList.title}</h2>
                                </main>
                            </div>
                        )
                    )
                }
            </div>
            <div ref={loadMoreRef}></div>
        </div>
    );
}

export default CategoryBoardListPage;