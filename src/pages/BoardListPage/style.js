import { css } from "@emotion/react";

export const container =  css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid #dbdbdb;
    padding: 1rem;
`;

export const title = css`
    display: flex;

    & > h2 {
        margin: 1rem;
        font-size: 2rem;
    }
`;

export const searchItems = css`
    display: flex;
`;
    
export const searchInputBox = css`
    position: relative;
    margin-left: 1rem;
    height: 3rem;
    
    & > input {
        box-sizing: border-box;
        outline-color: #2684ff;
        border: 0.1rem solid #dbdbdb;
        border-radius: 0.4rem;
        padding: 0 4rem 0 1rem;
        width: 20rem;
        height: 100%;
        font-size: 1rem;
        font-family: "Noto Sans KR", serif;
    }

    & > button {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 1rem;
    }
`;

export const main = css`
    padding: 1rem;
`;

export const boardListContainer = css`
    margin: 0;
    padding: 0;
    list-style-type: none;

    & > li:nth-of-type(1) {
        background-color: #fafafa;
    }
    
    & > li {
        display: flex;
        align-items: center;
        height: 3rem;
        cursor: default;

        &:not(:nth-of-type(1)):hover {
            border-radius: 0.7rem;
            background-color: #eeeeee;
            cursor: pointer;
        }

        & > div {
            box-sizing: border-box;
            font-size: 1.4rem;
        }

        & > div:not(& > div:nth-last-of-type(1)) {
            margin-right: 1rem;
            border-right: 0.1rem solid #dbdbdb;
        }

        & > div:nth-of-type(1) {
            padding-left: 1rem;
            width: 8rem;
        }

        & > div:nth-of-type(2) {
            flex-grow: 1;
            display: block;
            width: 13.4rem;
            padding-right: 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        & > div:nth-of-type(3) {
            width: 15rem;
        }

        & > div:nth-of-type(4) {
            width: 5rem;
        }

        & > div:nth-of-type(5) {
            width: 10rem;
        }
    }
`;

export const boardWriter = css`
    display: flex;
`;

export const boardCounts = css`
    display: flex;

    & > span {
        position: relative;
        margin-right: 1rem;
        cursor: default;

        &:hover > span {
            display: block;
        }

        & > span {
            display: none;
            position: absolute;
            transform: translateX(-50%);
            left: 50%;
            border-radius: 0.5rem;
            padding: 0.3rem 0.5rem;
            background-color: #fafafa;
            font-size: 1.2rem;
        }
    }
`;

export const footer = css`
    padding: 1rem;
`;