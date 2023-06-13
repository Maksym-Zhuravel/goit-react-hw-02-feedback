import React from "react";

import { List, ListItem } from "./Statistics.styled";

export default function Statistic({ items }) {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.label}>
          {item.label}: {item.value}
        </ListItem>
      ))}
    </List>
  );
}

