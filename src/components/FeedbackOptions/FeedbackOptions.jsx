import React from "react";
import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};