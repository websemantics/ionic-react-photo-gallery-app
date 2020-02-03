import { p as patchBrowser, b as bootstrapLazy } from './core-0c538558.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["pwa-camera-modal-instance", [[1, "pwa-camera-modal-instance", null, [[32, "keyup", "handleBackdropKeyUp"]]]]], ["pwa-camera-modal", [[1, "pwa-camera-modal", { "present": [64], "dismiss": [64] }]]], ["pwa-toast", [[1, "pwa-toast", { "message": [1], "duration": [2], "closing": [32] }]]], ["pwa-camera", [[1, "pwa-camera", { "facingMode": [1, "facing-mode"], "onPhoto": [16], "photo": [32], "photoSrc": [32], "showShutterOverlay": [32], "flashIndex": [32] }]]]], options);
});
