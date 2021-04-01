// React Components
// 0 => useHistory to navigate between pages
import { useHistory } from "react-router-dom";

// Custom Components
import NewMeetupForm from "../components/meetups/NewMeetupForm";

//Firebase URL
const URL =
  "https://react-getting-started-8d18f-default-rtdb.firebaseio.com/meetups.json";

const NewMeetupPage = () => {
  // 1 => Call and save it inside a variable
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
      // fetch() return a promise, so we can use .then() to change our page after the fetch is done
    }).then(() => {
      // 2 => .replace navigate to another page and don't alow "the back" button to go to the last page
      history.replace("/");
    });
  };
  return (
    <section>
      <h1>+ New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
