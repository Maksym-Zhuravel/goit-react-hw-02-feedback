import React from "react";
import { Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onButtonClick }) {
    return (
        <div>
            {options.map(option => (
                <Button key={option} onClick={() => onButtonClick(option)}>{option}</Button>
            ))}
        </div>
    )
}

export const buttonOptions = ['Good', 'Neutral', 'Bad'];