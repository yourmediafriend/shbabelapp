import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Common Page Layouts
import OneColumnSidebar from './components/App/OneColumnSidebar';
import OneColumnFlat from './pages/OneColumnFlat';

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

    <Route exact path='/layouts/1-column' render={() => <OneColumnSidebar currentpage='oneColumnCenterDemo' />} />
    <Route exact path='/layouts/2-column-right' render={() => <OneColumnSidebar currentpage='twoColumnRightDemo' />} />
    <Route exact path='/layouts/2-column-left' render={() => <OneColumnSidebar currentpage='twoColumnLeftDemo' />} />
    <Route exact path='/layouts/3-column' render={() => <OneColumnSidebar currentpage='threeColumnDemo' />} />
    <Route exact path='/layouts/mixed' render={() => <OneColumnSidebar currentpage='mixedDemo' />} />

    <Route exact path='/drupal-articles' render={() => <OneColumnSidebar currentpage='drupalArticles' />} />

    {/*/ News /*/}

    <Route exact path='/news' render={() => <OneColumnSidebar currentpage='news' />} />
    <Route path='/news/:type/:article' render={({match}) => <OneColumnSidebar match={match} currentpage='news/article' />} />

    {/*/SVG.js/*/}
    <Route exact path='/svgs/square' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                                currentpage='square'
                                                                                singlePage={true}
                                                                                showHeader={true}
                                                                                showFooterFixed={true}
                                                                                showFooterReveal={false} />} />

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

    <Route exact path='/fullpage/david-carson' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                                         currentpage='fullpage'
                                                                                         pageRef={'david-carson'}
                                                                                         showHeader={true}
                                                                                         showFooterFixed={true}
                                                                                         showFooterReveal={false} />} />

    <Route exact path='/fullpage/fluro' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                                  currentpage='fullpage'
                                                                                  pageRef={'fluro'}
                                                                                  showHeader={false}
                                                                                  showFooterFixed={false}
                                                                                  showFooterReveal={false} />} />

    <Route exact path='/fullpage/trees' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                                  currentpage='fullpage'
                                                                                  pageRef={'trees'}
                                                                                  showHeader={false}
                                                                                  showFooterFixed={false}
                                                                                  showFooterReveal={false} />} />

    <Route exact path='/fullpage/wobble' render={(routeProps) => <OneColumnSidebar {...routeProps}
                                                                                  currentpage='fullpage'
                                                                                  pageRef={'wobble'}
                                                                                  showHeader={false}
                                                                                  showFooterFixed={false}
                                                                                  showFooterReveal={false} />} />


    <Route exact path='/sticky-header' render={() => <OneColumnSidebar currentpage='stickyHeader' />} />
    <Route exact path='/grid-fixed' render={() => <OneColumnSidebar currentpage='grid-fixed' />} />
    <Route exact path='/grid-parallax' render={() => <OneColumnSidebar currentpage='grid-parallax'
                                                                       showHeader={true}
                                                                       showFooterFixed={true}
                                                                       showFooterReveal={true} />} />

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