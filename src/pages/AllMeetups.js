// React components
import { useState, useEffect } from "react";

// Custom Components
import MeetupList from "../components/meetups/MeetupList";

const URL =
  "https://react-getting-started-8d18f-default-rtdb.firebaseio.com/meetups.json";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => {
        return response.json(); // This gives acces to our data as js_object
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <section>
          <p>Loading...</p>
        </section>
      ) : (
        <section>
          <h1>All Meetups</h1>
          <MeetupList meetups={loadedMeetups} />
        </section>
      )}
    </>
  );
};

export default AllMeetupsPage;
