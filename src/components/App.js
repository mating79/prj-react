import React from 'react';
import Layout from './layout/layout';
import Home from './home/Home';
import Tweetbyhashtag from './tweetbyhashtag/Tweetbyhashtag';
import Tweetbyuser from './tweetbyuser/Tweetbyuser';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import P404 from './home/P404'
import Auth from './home/components/Auth';
import { ToastContainer } from 'react-toastify';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path={"/login"} component={Auth} />
                <Route path={"/"} render={() =>
                    <Route path={"/"} render={() => {
                        return <Layout>
                            <Switch>
                                <Route exact path={"/"} component={Home} />
                                <Route path={"/tweetbyuser/:users"} component={Tweetbyuser} />
                                <Route path={"/tweetbyhashtag/:hashtags"} component={Tweetbyhashtag} />
                                <Route component={P404} />
                            </Switch>
                        </Layout>

                    }} />
                } />
            </Switch>
        </BrowserRouter>
        <ToastContainer/>
        </>
    );
};

export default App;