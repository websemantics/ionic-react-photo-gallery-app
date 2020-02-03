import React from 'react'
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/react'

const Details = () => {
  return (React.createElement(IonPage, null,
    React.createElement(IonHeader, null,
      React.createElement(IonToolbar, null,
        React.createElement(IonButtons, { slot: "start" },
          React.createElement(IonBackButton, { defaultHref: "/tab2" })),
        React.createElement(IonTitle, null, "Detail"))),
    React.createElement(IonContent, null,
      React.createElement("p", null, "Details"))))
}

export default Details
