import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import ArticleView from "./pages/article-view";
import CreateArticle from "./pages/create-article";
import Register from "./pages/training/registration";
import TraineeList from "./pages/training/trainee-list";

const MainRoutes = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/article/:title" component={ArticleView} />
          <Route exact path="/manage-article" component={CreateArticle} />
          <Route exact path="/training-registeration" component={Register} />
          <Route exact path="/trainee-list" component={TraineeList} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default MainRoutes;
