import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { book, build, colorFill, grid } from 'ionicons/icons'
import React from 'react'

const Tab1 = () => {
  return (React.createElement(IonPage, null,
    React.createElement(IonHeader, null,
      React.createElement(IonToolbar, null,
        React.createElement(IonTitle, null, "Tab One"))),
    React.createElement(IonContent, null,
      React.createElement(IonCard, { className: "welcome-card" },
        React.createElement("img", { src: "./assets/shapes.svg", alt: "" }),
        React.createElement(IonCardHeader, null,
          React.createElement(IonCardSubtitle, null, "Get Started"),
          React.createElement(IonCardTitle, null, "Welcome to Ionic")),
        React.createElement(IonCardContent, null,
          React.createElement("p", null, "Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps."))),
      React.createElement(IonList, { lines: "none" },
        React.createElement(IonListHeader, null,
          React.createElement(IonLabel, null, "Resources")),
        React.createElement(IonItem, { href: "https://ionicframework.com/docs/", target: "_blank" },
          React.createElement(IonIcon, { slot: "start", color: "medium", icon: book }),
          React.createElement(IonLabel, null, "Ionic Documentation")),
        React.createElement(IonItem, { href: "https://ionicframework.com/docs/building/scaffolding", target: "_blank" },
          React.createElement(IonIcon, { slot: "start", color: "medium", icon: build }),
          React.createElement(IonLabel, null, "Scaffold Out Your App")),
        React.createElement(IonItem, { href: "https://ionicframework.com/docs/layout/structure", target: "_blank" },
          React.createElement(IonIcon, { slot: "start", color: "medium", icon: grid }),
          React.createElement(IonLabel, null, "Change Your App Layout")),
        React.createElement(IonItem, { href: "https://ionicframework.com/docs/theming/basics", target: "_blank" },
          React.createElement(IonIcon, { slot: "start", color: "medium", icon: colorFill }),
          React.createElement(IonLabel, null, "Theme Your App"))))))
}

export default Tab1
