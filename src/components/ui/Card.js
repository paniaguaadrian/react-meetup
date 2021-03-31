// Styles
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
  // We need this props.children to tell to the MeetupItem component that this <Card>"will be a wrapper"</Card>
};

export default Card;
