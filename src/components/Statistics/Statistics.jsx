import React from "react";
import PropTypes from 'prop-types';
import { List, ListItem } from "./Statistics.styled";

export default function Statistic({ good, neutral, bad, total, positiveFeedback}) {
  return (
    <List>
          <ListItem>Good: {good}</ListItem>
          <ListItem>Neutral: {neutral}</ListItem>
          <ListItem>Bad: {bad}</ListItem>
          <ListItem>Total: {total}</ListItem>
          <ListItem>Positive feedback: {positiveFeedback}%</ListItem>
    </List>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};