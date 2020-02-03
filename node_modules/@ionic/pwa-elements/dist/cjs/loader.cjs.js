'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-537ad5ea.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["pwa-camera-modal-instance.cjs",[[1,"pwa-camera-modal-instance",null,[[32,"keyup","handleBackdropKeyUp"]]]]],["pwa-camera-modal.cjs",[[1,"pwa-camera-modal",{"present":[64],"dismiss":[64]}]]],["pwa-toast.cjs",[[1,"pwa-toast",{"message":[1],"duration":[2],"closing":[32]}]]],["pwa-camera.cjs",[[1,"pwa-camera",{"facingMode":[1,"facing-mode"],"onPhoto":[16],"photo":[32],"photoSrc":[32],"showShutterOverlay":[32],"flashIndex":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
