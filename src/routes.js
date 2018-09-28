import React from 'react'
import { Switch, Route } from 'react-router-dom'
import store from './store';

import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'


// Common Page Layouts
import OneColumnSidebar from './components/App';
import { setUpPage } from './modules/App';


// Test Pages
import Recompose from './pages/RecomposeTest'
import Strap from './pages/ReactStrapTest'


// this works but disrupts certain Componenets (Music player and Sidemenu) with a page refresh
const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: () => { return false },
})

const MyAccount = () => {
  connect(setUpPage({
    stickyHeader: true,
    fixedFooter: true,
    revealFooter: true,
  }));
  return (
    <OneColumnSidebar currentpage='account'/>
  )
}

const checkAuthentication = userIsAuthenticated(MyAccount);


const connect = (fn) => {
  return store.dispatch(fn);
}

const SwitchRoute = () => (
  <Switch>

    {/*/ Homepage /*/}

    <Route exact path='/' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='home'/>
    }} />


    {/* User Account */}

    <Route exact path='/account' component={checkAuthentication} />


    <Route exact path='/password' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='password'/>
    }} />

    <Route exact path='/sign-up' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='signup'/>
    }} />

    <Route exact path='/login' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='login'/>
    }} />

    {/*/ Demo Layout /*/}

    <Route exact path='/layouts/1-column' render={() => {
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar currentpage='oneColumnCenterDemo' />
    }} />

    <Route exact path='/layouts/2-column-left' render={() => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar currentpage='twoColumnLeftDemo' />
    }} />

    <Route exact path='/layouts/2-column-right' render={() => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar currentpage='twoColumnRightDemo' />
    }} />

    <Route exact path='/layouts/3-column' render={() => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar currentpage='threeColumnDemo' />
    }} />

    <Route exact path='/layouts/3-column' render={() => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar currentpage='threeColumnDemo' />
    }} />

    <Route exact path='/layouts/mixed' render={() => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar currentpage='mixedDemo' />
    }} />

    <Route exact path='/drupal-articles' render={() => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar currentpage='drupalArticles' />
    }} />

    {/*/ News /*/}

    <Route exact path='/news' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='news'/>
    }} />

    <Route exact path='/news/:type/:article' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='news/article'/>
    }} />

    {/*/SVG.js/*/}

    <Route exact path='/svgs/square' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='square' />
    }} />

    <Route exact path='/svgs/circle' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='circle' />
    }} />

    <Route exact path='/svgs/triangle' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='triangle' />
    }} />

    {/*/Layout Elements/*/}

    <Route exact path='/quarter' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='quarter'/>
    }} />


    {/*/Fullpage/*/}

    {/* TODO: I can probably create a single route for all Fullpage */}

    <Route exact path='/fullpage/david-carson' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='fullpage'
                               pageRef={'david-carson'} />
    }} />

    <Route exact path='/fullpage/fluro' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='fullpage'
                               pageRef={'fluro'} />
    }} />

    <Route exact path='/fullpage/trees' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='fullpage'
                               pageRef={'trees'} />
    }} />

    <Route exact path='/fullpage/wobble' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='fullpage'
                               pageRef={'wobble'} />
    }} />

    <Route exact path='/grid-parallax' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='grid-parallax'/>
    }} />

    {/*/Site Pages/*/}

    <Route exact path='/contact' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: true,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='contact'/>
    }} />

    <Route exact path='/weather' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: false,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='weather'/>
    }} />

    {/*/ScrollMagic/*/}
    <Route exact path='/mscroll/parallax' render={() => <OneColumnSidebar currentpage='parallax' />} />
    <Route exact path='/mscroll/parallax-extra' render={() => <OneColumnSidebar currentpage='parallaxExtra' />} />
    <Route exact path='/mscroll/svg-flasher' render={() => <OneColumnSidebar currentpage='svgFlasher' />} />
    {/*/Test Pages/*/}
    <Route exact path='/sticky-header' render={() => <OneColumnSidebar currentpage='stickyHeader' />} />
    <Route exact path='/grid-fixed' render={() => <OneColumnSidebar currentpage='grid-fixed' />} />
    <Route exact path='/test' render={() => <OneColumnSidebar currentpage='test' />} />
    <Route exact path='/rec' component={Recompose}/>
    <Route exact path='/strap' component={Strap}/>

  </Switch>
);

export default SwitchRoute