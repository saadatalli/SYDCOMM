const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AUh4sINoeCSkR635HFL7beJmX3unDPodtlrO_AmGDPSLwcCm-_Pd1ftaD_bYToMi2StcVM-WujGmL3Gk",
  client_secret: "EMb6Pjuhr7ElRa4mSb16Xd0dY9hRXTY7Wh46pr_-4Tnnil_LBXm3EzV7e1uBj291rNB5ymNgX3wYhErV",
});

module.exports = paypal;
