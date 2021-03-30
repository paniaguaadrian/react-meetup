// React Components
import { Route, Switch } from "react-router-dom";

// Syles imported
import "./index.css";

// Custom Components
import MainNavigation from "./components/layout/MainNavigation";

// Pages imported
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact component={AllMeetupsPage} />
        <Route path="/new-meetup" component={NewMeetupPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </div>
  );
}

export default App;
