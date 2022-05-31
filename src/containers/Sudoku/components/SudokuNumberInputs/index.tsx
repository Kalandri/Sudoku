import React from "react";
import styled from "styled-components";

interface Props {
    children: string;
    value: number;
}

const SudokuNumberInputs = () => {

}
const SudokuNumberInput = ({children}: Props) => {

    return (

    )
}

const NumberRow = () => 
    ['1','2','3','4','5','6','7','8','9','X'].map((i) => <SudokuNumberInput value={parseInt(i)}>{i}</SudokuNumberInput>)