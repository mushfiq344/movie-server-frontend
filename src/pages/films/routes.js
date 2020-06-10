import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import Layout from "../../components/layout/layout";

import { Create } from './create/create';
import Index from "./gallery/index";

import { SingleMovieIndex } from "./singleMovie/index";

export default function FilmsRoutes() {

    let { path, url } = useRouteMatch();
    return (
        <Layout>

            <Switch>
                <Route exact path={path}>
                    {/* categories */}
                    <Index></Index>
                </Route>
                <Route exact path={`${path}/create`}>
                    <Create></Create>
                </Route>
                <Route path={`${path}/:slug_name`} component={SingleMovieIndex}>

                </Route>
            </Switch>

        </Layout>
    );
}




