import styled from '@emotion/styled';

export const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`;

export const Btn = styled.button`

    border: none;
    border-radius: 14px;
    margin: 10px;
    padding: 10px 30px;
    cursor: pointer;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.acсentColor};
    text-align: center;
    font-size: 16px;
    display: block;
    :hover {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.secondAccentColor};
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
        0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
        transition: background-color 300ms ${props => props.theme.animation.primeCubic},
        color 300ms ${props => props.theme.animation.primeCubic};
    }
    :active {
        color: ${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.acсentColor};
        transition: background-color 200ms ${props => props.theme.animation.primeCubic},
        color 200ms ${props => props.theme.animation.primeCubic};
    }
`;