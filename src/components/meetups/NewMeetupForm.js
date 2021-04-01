// React components
// 0 => useRef => Reading inputs and reading values. Not changing it
import { useRef } from "react";

// Custom components
import Card from "../ui/Card";

// Styles
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  // 1=>  Create reference object and store in a variable
  const titleInpuRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    // 3 => On submit take the current value of that reference item and store it on a variable
    const enteredTitle = titleInpuRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    // With that props example, we can create and use a function on the parent component (NewMeetup)
    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Tile</label>
          {/* 2 => Use that titleInputRef here to control this input */}
          <input type="text" required id="title" ref={titleInpuRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
