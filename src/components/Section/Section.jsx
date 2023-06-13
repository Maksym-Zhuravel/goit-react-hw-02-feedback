import React from "react";
import PropTypes from 'prop-types';
import { Heading } from "./Section.styled";



export default function Title({ title }) {
    return (
        <Heading>
            {title}
        </Heading>
    )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};


