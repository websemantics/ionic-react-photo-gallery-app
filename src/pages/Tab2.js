import React, { useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react'
import { camera, trash, close } from 'ionicons/icons'
import { usePhotoGallery } from '../hooks/usePhotoGallery.js'

const Tab2 = () => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery()
  const [photoToDelete, setPhotoToDelete] = useState()
  return (React.createElement(IonPage, null,
    React.createElement(IonHeader, null,
      React.createElement(IonToolbar, null,
        React.createElement(IonTitle, null, "Photo Gallery"))),
    React.createElement(IonContent, null,
      React.createElement(IonGrid, null,
        React.createElement(IonRow, null, photos.map((photo, index) => (React.createElement(IonCol, { size: "6", key: index },
          React.createElement(IonImg, { onClick: () => setPhotoToDelete(photo), src: photo.base64 ?? photo.webviewPath })))))),
      React.createElement(IonFab, { vertical: "bottom", horizontal: "center", slot: "fixed" },
        React.createElement(IonFabButton, { onClick: () => takePhoto() },
          React.createElement(IonIcon, { icon: camera }))),
      React.createElement(IonActionSheet, {
        isOpen: !!photoToDelete, buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: trash,
          handler: () => {
            if (photoToDelete) {
              deletePhoto(photoToDelete)
              setPhotoToDelete(undefined)
            }
          }
        }, {
          text: 'Cancel',
          icon: close,
          role: 'cancel'
        }], onDidDismiss: () => setPhotoToDelete(undefined)
      }))))
}

export default Tab2
