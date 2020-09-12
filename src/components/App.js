import React from 'react';
import Layout from './layout/layout';
import Home from './home/Home';
import Tweetbyhashtag from './tweetbyhashtag/Tweetbyhashtag';
import Tweetbyuser from './tweetbyuser/Tweetbyuser';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import P404 from './home/P404'
import Auth from './home/components/Auth';
import { ToastContainer } from 'react-toastify';
// import { render } from '@testing-library/react';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path={"/login"} component={Auth} />
                    <PrivetRoute path={"/"} render={() =>
                        {
                            return <Layout>
                                <Switch>
                                    <Route exact path={"/"} component={Home} />
                                    <Route path={"/tweetbyuser/:users"} component={Tweetbyuser} />
                                    <Route path={"/tweetbyhashtag/:hashtags"} component={Tweetbyhashtag} />
                                    <Route component={P404} />
                                </Switch>
                            </Layout>;
                        }

                    } />
                </Switch>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
};

const islogin = () => !!localStorage.getItem("X-auth-token");

const PublicRoute = ({ component, ...props }) => {
    return <Route {...props} render={(props) => {
        if (islogin())
            return <Redirect to={"/"} />
        else {
            return React.createElement(component, props);
        }
    }} />
};
const PrivetRoute = ({ render, ...props }) => {
    return <Route  {...props} render={(props) => {
        if (islogin()) {
            return render(props)
        }
        else {
            return <Redirect to={"/login"} />

        }
    }} />
}

export default App;