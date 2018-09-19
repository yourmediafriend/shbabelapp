import React from 'react'
import { Switch, Route } from 'react-router-dom'
import store from './store';


// Common Page Layouts
import OneColumnSidebar from './components/App';
import OneColumnFlat from './pages/OneColumnFlat';
import { setUpPage } from './modules/App';


// Test Pages
import Recompose from './pages/RecomposeTest'
import Strap from './pages/ReactStrapTest'

/*
//
// OPTIONS
//
showHeader={false}
showFooterReveal={false}
showFooterFixed={false}
*/

const connect = (fn) => {
  return store.dispatch(fn);
}

const SwitchRoute = () => (
  <Switch>

    {/*/ Homepage /*/}
    <Route exact path='/' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                    currentpage='home'
                                                                    singlePage={false}
                                                                    showHeader={true}
                                                                    showFooterFixed={true}
                                                                    showFooterReveal={false} />} />


    <Route exact path='/full' render={() => <OneColumnFlat currentpage='full' />} />
    <Route exact path='/svgs' render={() => <OneColumnSidebar currentpage='svgs' />} />

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





    <Route exact path='/layouts/2-column-right' render={() => <OneColumnSidebar currentpage='twoColumnRightDemo' />} />
    <Route exact path='/layouts/3-column' render={() => <OneColumnSidebar currentpage='threeColumnDemo' />} />
    <Route exact path='/layouts/mixed' render={() => <OneColumnSidebar currentpage='mixedDemo' />} />

    <Route exact path='/drupal-articles' render={() => <OneColumnSidebar currentpage='drupalArticles' />} />

    {/*/ News /*/}

    <Route exact path='/news' render={() => <OneColumnSidebar currentpage='news' />} />
    <Route path='/news/:type/:article' render={({match}) => <OneColumnSidebar match={match} currentpage='news/article' />} />

    {/*/SVG.js/*/}
    <Route exact path='/svgs/square' render={(routeProps) => {
      // do I set the initial App State here
      connect(setUpPage({
        stickyHeader: true,
        fixedFooter: true,
        revealFooter: false,
      }));
      return <OneColumnSidebar {...routeProps}
                               currentpage='square'
                               singlePage={true} />
    }} />




    <Route exact path='/svgs/circle' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                                currentpage='circle'
                                                                                singlePage={true}
                                                                                showHeader={true}
                                                                                showFooterFixed={true}
                                                                                showFooterReveal={false} />} />

    <Route exact path='/svgs/triangle' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                                currentpage='triangle'
                                                                                singlePage={true}
                                                                                showHeader={true}
                                                                                showFooterFixed={true}
                                                                                showFooterReveal={false} />} />

    <Route exact path='/svgs/hypno' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                                currentpage='hypno'
                                                                                singlePage={true}
                                                                                showHeader={false}
                                                                                showFooterFixed={false}
                                                                                showFooterReveal={false} />} />


    <Route exact path='/svgs/patterns' render={() => <OneColumnSidebar currentpage='svgPattern' fullscreen={true}/>} />

    {/*/ScrollMagic/*/}
    <Route exact path='/mscroll/parallax' render={() => <OneColumnSidebar currentpage='parallax' />} />
    <Route exact path='/mscroll/parallax-extra' render={() => <OneColumnSidebar currentpage='parallaxExtra' />} />
    <Route exact path='/mscroll/svg-flasher' render={() => <OneColumnSidebar currentpage='svgFlasher' />} />

    {/*/Layout Elements/*/}

    <Route exact path='/quarter' render={() => <OneColumnSidebar currentpage='quarter'
                                                                 showHeader={true}
                                                                 showFooterFixed={true}
                                                                 showFooterReveal={false} />} />


    <Route exact path='/fullpage' render={() => <OneColumnSidebar currentpage='fullpage'
                                                                 showHeader={false}
                                                                 showFooterFixed={false}
                                                                 showFooterReveal={false} />} />

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




    <Route exact path='/sticky-header' render={() => <OneColumnSidebar currentpage='stickyHeader' />} />
    <Route exact path='/grid-fixed' render={() => <OneColumnSidebar currentpage='grid-fixed' />} />



    {/*/Site Pages/*/}
    <Route exact path='/contact' render={() => <OneColumnSidebar currentpage='contact' />} />
    <Route exact path='/weather' render={() => <OneColumnSidebar currentpage='weather'
                                                                 showFooterFixed={false}
                                                                 showFooterReveal={false} />} />

    {/*/Test Pages/*/}
    <Route exact path='/test' render={() => <OneColumnSidebar currentpage='test' />} />
    <Route exact path='/rec' component={Recompose}/>
    <Route exact path='/strap' component={Strap}/>

  </Switch>
);

export default SwitchRoute