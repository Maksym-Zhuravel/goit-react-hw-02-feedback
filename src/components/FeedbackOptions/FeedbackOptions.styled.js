import styled from '@emotion/styled';

export const Box = styled.div`
display: flex;
justify-content: center;
gap: 10px;
`

export const Button = styled.button`
background-color: lightgoldenrodyellow;
padding: 10px;
border-radius: 10px;
border: 2px dashed;
transition: 200ms;
cursor: pointer;
&:hover{
    background-color: blanchedalmond;
    transform: scale(1.1);
    transition: 200ms;
}
`