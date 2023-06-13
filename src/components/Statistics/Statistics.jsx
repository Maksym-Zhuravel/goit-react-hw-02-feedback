import React from "react";

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

