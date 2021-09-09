import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #4f4f4f;
    padding-left: 10px;
    padding-right: 10px;
    color: #e5e5e5;
    box-sizing: border-box;

    :disabled {
        cursor: not-allowed;
        pointer-events: none;
    }

    :hover {
        background-color: #e5e5e5;
        color: #4f4f4f;
        border: 1px solid #4f4f4f;
    }
`;