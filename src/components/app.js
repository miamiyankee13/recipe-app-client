import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Backdrop from './backdrop';
import Header from './header';
import MobileNav from './mobile-nav';
import Footer from './footer';
import RecipesPage from './recipes-page';
import RecipePage from './recipe-page';
import AddRecipePage from './add-recipe-page';
import EditRecipePage from './edit-recipe-page';
import NotFoundPage from './not-found-page';

export class App extends React.Component {
    state = {
        mobileNav: false
    };

    //event listener for backdrop removal if open and window is resized
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState(prevState => {
                return { mobileNav: window.innerWidth < 800 && prevState.mobileNav };
            });
        });
    }

    //avoid re-rendering on every window resize
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.mobileNav !== this.state.mobileNav;
    }

    //toggle status of mobile nav
    toggleMobileNav = () => {
        this.setState(prevState => {
            return { 
                mobileNav: !prevState.mobileNav,
            }
        });
    }

    //scroll to top of window
    scrollTop = () => {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <React.Fragment>
                <Backdrop 
                    visible={this.state.mobileNav} 
                    toggleMobileNav={this.toggleMobileNav} 
                />
                <Header 
                    visible={this.state.mobileNav} 
                    toggleMobileNav={this.toggleMobileNav} 
                    scrollTop={this.scrollTop} 
                />
                <MobileNav 
                    visibile={this.state.mobileNav} 
                    toggleMobileNav={this.toggleMobileNav} 
                    scrollTop={this.scrollTop} 
                />
                <main className="main">
                    <Switch>
                        <Route path="/recipes/:id" component={RecipePage} />
                        <Route path="/recipes" component={RecipesPage} />
                        <Route path="/add" component={AddRecipePage} />
                        <Route path="/edit" component={EditRecipePage} />
                        <Redirect from="/" to="/recipes" />
                        <Route component={NotFoundPage} />
                    </Switch>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;