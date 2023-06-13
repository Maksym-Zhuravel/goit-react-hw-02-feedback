import React from "react";
import { Button, Box } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onButtonClick }) {
    return (
        <Box>
            {options.map(option => (
                <Button key={option} onClick={() => onButtonClick(option.toLowerCase())}>{option}</Button>
            ))}
        </Box>
    )
}

export const buttonOptions = ['Good', 'Neutral', 'Bad'];