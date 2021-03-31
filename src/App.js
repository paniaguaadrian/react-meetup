// React Components
import { Route, Switch } from "react-router-dom";

// Syles imported
import "./index.css";

// Custom Components
import Layout from "./components/layout/Layout";

// Pages imported
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={AllMeetupsPage} />
        <Route path="/new-meetup" component={NewMeetupPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Layout>
  );
}

export default App;
