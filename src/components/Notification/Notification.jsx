import PropTypes from 'prop-types';
import { Article } from "./Notification.styled";


export default function Notification({notification}) {
    return (
        <Article>{notification}</Article>
    )
}

Notification.propTypes = {
  notification: PropTypes.string.isRequired,
};