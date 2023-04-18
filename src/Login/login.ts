import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    background-color: #1c1c1c;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled.div`
    height: fit-content;
    width: 200px;
    background-color: #9992fb;

    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border-radius: 10px;;
    padding: 20px;
`
export const Titulo = styled.h1`
    font-size: 25px;
    font-weight: 700;
    margin: 20px;
    color: #fff;
`
export const Input = styled.input`
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;

    outline: none;

    :focus-visible{
        background-color: hsl(120, 60%, 70%);
        transition: 1s;
    }
`
export const Button = styled.button`
    width: 100%;
    padding: 10px;;
    cursor: pointer;

    color: #fff;
    font-weight: 700;

    border:none;
    border-radius: 10px;
    background-color: #17a4a2;

    :hover{
        background-color: #fff;
        color: #9992fb;
        font-weight: 700;
        transition: 1s;
    }

`