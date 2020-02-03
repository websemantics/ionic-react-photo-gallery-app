import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { IonReactHashRouter } from '@ionic/react-router'
import { flash, send, images } from 'ionicons/icons'
import Tab1 from './pages/Tab1.js'
import Tab2 from './pages/Tab2.js'
import Tab3 from './pages/Tab3.js'
import Details from './pages/Details.js'

const App = () => (React.createElement(IonApp, null,
  React.createElement(IonReactHashRouter, null,
    React.createElement(IonTabs, null,
      React.createElement(IonRouterOutlet, null,
        React.createElement(Route, { path: "/tab1", component: Tab1, exact: true }),
        React.createElement(Route, { path: "/tab2", component: Tab2, exact: true }),
        React.createElement(Route, { path: "/tab2/details", component: Details }),
        React.createElement(Route, { path: "/tab3", component: Tab3 }),
        React.createElement(Route, { path: "/", render: () => React.createElement(Redirect, { to: "/tab1" }), exact: true })),
      React.createElement(IonTabBar, { slot: "bottom" },
        React.createElement(IonTabButton, { tab: "tab1", href: "/tab1" },
          React.createElement(IonIcon, { icon: flash }),
          React.createElement(IonLabel, null, "Tab One")),
        React.createElement(IonTabButton, { tab: "tab2", href: "/tab2" },
          React.createElement(IonIcon, { icon: images }),
          React.createElement(IonLabel, null, "Photos")),
        React.createElement(IonTabButton, { tab: "tab3", href: "/tab3" },
          React.createElement(IonIcon, { icon: send }),
          React.createElement(IonLabel, null, "Tab Three")))))))

export default App
