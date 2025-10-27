if (typeof console === "undefined" || typeof console.log === "undefined") {
  console = {};
  console.log = function () {};
}

// Variables globales
var AgeGateByPass;
if (!AgeGateByPass) {
  AgeGateByPass = new Object();
  AgeGateByPass.isToBypass = false;
}

// Fonction pour vérifier si l'utilisateur vient d'un domaine autorisé (Aperol ou The Mixer)
function isFromAperolDomain() {
  const referrer = document.referrer;
  const aperolDomains = [
    "aperol.com",
    "shop.aperol.com",
    "us-shop.aperol.com",
    "www.aperol.com",
    "www.shop.aperol.com",
    "www.us-shop.aperol.com",
    "themixer.com",
    "www.themixer.com",
  ];

  console.log("Age Gate Bypass - Referrer:", referrer);

  // Méthode 1: Vérifier le referrer standard
  if (referrer) {
    try {
      const referrerUrl = new URL(referrer);
      const referrerHostname = referrerUrl.hostname.toLowerCase();
      
      console.log("Age Gate Bypass - Referrer hostname:", referrerHostname);
      console.log("Age Gate Bypass - Authorized domains:", aperolDomains);

      // Vérifier si le referrer est un domaine autorisé
      const isAuthorized = aperolDomains.some(
        (domain) =>
          referrerHostname === domain || referrerHostname.endsWith("." + domain)
      );
      
      console.log("Age Gate Bypass - Is authorized:", isAuthorized);
      return isAuthorized;
    } catch (e) {
      console.log("Age Gate Bypass - Error parsing referrer:", e);
    }
  }

  // Méthode 2: Vérifier le sessionStorage pour les cas où le referrer est bloqué
  console.log("Age Gate Bypass - No referrer found, checking sessionStorage");
  
  try {
    const storedReferrer = sessionStorage.getItem('aperol-referrer');
    console.log("Age Gate Bypass - Stored referrer:", storedReferrer);
    
    if (storedReferrer) {
      const referrerUrl = new URL(storedReferrer);
      const referrerHostname = referrerUrl.hostname.toLowerCase();
      
      const isAuthorized = aperolDomains.some(
        (domain) =>
          referrerHostname === domain || referrerHostname.endsWith("." + domain)
      );
      
      console.log("Age Gate Bypass - Stored referrer authorized:", isAuthorized);
      return isAuthorized;
    }
  } catch (e) {
    console.log("Age Gate Bypass - Error parsing stored referrer:", e);
  }

  console.log("Age Gate Bypass - No authorized domain detected");
  return false;
}

// Set a Cookie
function setCookieBypass(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = 0;
  if (expDays != 0) {
    expires = "expires=" + date.toUTCString();
  }
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function setLocalStorage(cName, cValue) {
  localStorage.setItem(cName, JSON.stringify(cValue));
}

function setSessionStorage(cName, cValue) {
  sessionStorage.setItem(cName, JSON.stringify(cValue));
}

function getCookieBypass(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}

function bypass(config) {
  const addCSS = (css) =>
    (document.head.appendChild(document.createElement("style")).innerHTML =
      css);
  if (config.elementsToHide) {
    addCSS(`${config.elementsToHide}{ display:none!important;}`);

    if (config.elementsToHide == ".sn_age_gate") {
      document.querySelector("body").classList.remove("overflow-hidden");
      document.querySelector(".sn_site_wrapper").classList.remove("_blur");
    }
  }

  if (typeof config.agegateCookieValue == "string") {
    if (config.agegateCookieValue.startsWith("#UTIL:")) {
      let util = config.agegateCookieValue.replace("#UTIL:", "");

      switch (util) {
        case "TIMESTAMP":
          config.agegateCookieValue = Date.now();
          setLocalStorage(config.agegateCookieName, config.agegateCookieValue);
          break;
        default:
          break;
      }
    }
  }

  setLocalStorage(config.agegateCookieName, config.agegateCookieValue);
  setSessionStorage(config.agegateCookieName, config.agegateCookieValue);
  setCookieBypass(config.agegateCookieName, config.agegateCookieValue, 0);
  document.body.classList.remove("overflowHidden");
  document.body.classList.remove("notScrollable");

  window.dispatchEvent(new CustomEvent("sn:gtma:age-gate-bypass:ok"));
  window.dispatchEvent(new CustomEvent("sn:gtma:age-gate:ok"));

  if (config.refreshPage) {
    location.reload();
  }
}

// Fonction principale d'initialisation
function initAgeGateBypass() {
  console.log("Age Gate Bypass - Initializing...");

  // Vérification simple : si l'utilisateur vient d'un domaine autorisé, bypass automatique
  const isFromAperol = isFromAperolDomain();

  if (isFromAperol) {
    console.log(
      "Age Gate Bypass - Authorized domain detected, bypassing age gate"
    );

    // Configuration par défaut pour le bypass
    const defaultConfig = {
      agegateCookieName: "age-gate-ok",
      agegateCookieValue: true,
      refreshPage: false,
      elementsToHide: "#age-gate-otp",
    };

    // Bypass immédiat
    AgeGateByPass.isToBypass = true;
    bypass(defaultConfig);
    return;
  } else {
    console.log(
      "Age Gate Bypass - No authorized domain detected, age gate will show normally"
    );
  }
}

// Initialiser le script quand le DOM est prêt
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAgeGateBypass);
} else {
  initAgeGateBypass();
}
