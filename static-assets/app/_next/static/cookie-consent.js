!function(){"use strict";
/*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   */var e=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var o={},n=t||{},r=e.split(";"),a=n.decode||i,d=0;d<r.length;d++){var c=r[d],u=c.indexOf("=");if(!(u<0)){var p=c.substring(0,u).trim();if(null==o[p]){var h=c.substring(u+1,c.length).trim();'"'===h[0]&&(h=h.slice(1,-1)),o[p]=s(h,a)}}}return o},t=function(e,t,i){var s=i||{},r=s.encode||o;if("function"!=typeof r)throw new TypeError("option encode is invalid");if(!n.test(e))throw new TypeError("argument name is invalid");var a=r(t);if(a&&!n.test(a))throw new TypeError("argument val is invalid");var d=e+"="+a;if(null!=s.maxAge){var c=s.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");d+="; Max-Age="+Math.floor(c)}if(s.domain){if(!n.test(s.domain))throw new TypeError("option domain is invalid");d+="; Domain="+s.domain}if(s.path){if(!n.test(s.path))throw new TypeError("option path is invalid");d+="; Path="+s.path}if(s.expires){if("function"!=typeof s.expires.toUTCString)throw new TypeError("option expires is invalid");d+="; Expires="+s.expires.toUTCString()}s.httpOnly&&(d+="; HttpOnly");s.secure&&(d+="; Secure");if(s.sameSite){switch("string"==typeof s.sameSite?s.sameSite.toLowerCase():s.sameSite){case!0:d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"strict":d+="; SameSite=Strict";break;case"none":d+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return d},i=decodeURIComponent,o=encodeURIComponent,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(t){return e}}function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,t){return e(t={exports:{}},t.exports),t.exports}var d=a((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.COOKIE_CONSENT_ACCEPT_EVENT_NAME=t.DEFAULT_COOKIE_EXPIRY=t.COOKIE_POLICY_ID=t.SIMPLE_COOKIE_NAME=t.COOKIE_NAME=void 0,t.COOKIE_NAME="twCookieConsent",t.SIMPLE_COOKIE_NAME="twCookieConsentGTM",t.COOKIE_POLICY_ID="2023-10-16",t.DEFAULT_COOKIE_EXPIRY=157248e5,t.COOKIE_CONSENT_ACCEPT_EVENT_NAME="accepttwcookieconsent"}));r(d),d.COOKIE_CONSENT_ACCEPT_EVENT_NAME;var c=d.DEFAULT_COOKIE_EXPIRY,u=d.COOKIE_POLICY_ID,p=d.SIMPLE_COOKIE_NAME,h=d.COOKIE_NAME,l=a((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.optional=t.essential=void 0,t.essential=[{name:"JSESSIONID",description:"authentication cookie used for grails session"},{name:"JSESSIONID",domain:".nr-data.net",description:"New relic monitoring jsessionid"},{name:"userToken",description:"main authentication user token"},{name:"appToken",description:"key that identifies application we connect to tw from (website)"},{name:"__cfduid",description:"is used to identify individual clients behind a shared IP address and apply security settings. It is used to stop malicious traffic and spam across our site (cloudflare)"},{name:"__cfruid",description:"is used for rate limiting policies."},{name:"cookie_notice_closed",description:"used to persist the action of hiding the cookie banner on transferwise.com between sessions"},{name:"gid",description:"this cookie is used to identify users (browsers)"},{name:"gid_tmp",description:"this cookie is used to identify users (browsers)"},{name:"oauthToken",description:"auth"},{name:"selectedProfileId/*",description:"stores the selected profile id for a given user"},{name:"selected-profile-id-*",description:"stores the selected profile id for a given user"},{name:"rc::c",description:"used to distinguish between humans and bots"},{name:"cacheID",description:"used to gather all information relating to a browser in order to detect any fraudulent or unlawful activity of a user."},{name:"#cid",description:"used to gather all information relating to a browser in order to detect any fraudulent or unlawful activity of a user."},{name:"localeData",description:"used in order to store the users language preference and provide the user with customised regional content"},{name:"twCookieConsent",description:"used to store consent status to non-essential cookies"},{name:"twCookieConsentGTM",description:"used to store consent status to non-essential cookies"},{name:"_tmp",description:"is used to identify users. This is only used for TransferWise's own internal purposes. By recognising unique browsers, we can more accurately measure the total number of users visiting our site from different locations on the web."},{name:"__mp_opt_in_out_*",description:"is essential to remember the user’s choice in consent specifically for Mixpanel."},{name:"countryOfResidence",description:"is used to ensure the user is shown only products which are available in the country in which they reside"},{name:"tw-ref",description:"are used as part of the referral program to help identify a host / guest. These are required to allow a host to receive a link between guests that sign up as well as providing a mechanism to allow applying a discount for first time invited users."},{name:"tw-ref-invite-source-code",description:"are used as part of the referral program to help identify a host / guest. These are required to allow a host to receive a link between guests that sign up as well as providing a mechanism to allow applying a discount for first time invited users."},{name:"tw-ref-user-id",description:"are used as part of the referral program to help identify a host / guest. These are required to allow a host to receive a link between guests that sign up as well as providing a mechanism to allow applying a discount for first time invited users."},{name:"tw-ref-user",description:"are used as part of the referral program to help identify a host / guest. These are required to allow a host to receive a link between guests that sign up as well as providing a mechanism to allow applying a discount for first time invited users."},{name:"tw-ref-user-name",description:"are used as part of the referral program to help identify a host / guest. These are required to allow a host to receive a link between guests that sign up as well as providing a mechanism to allow applying a discount for first time invited users."},{name:"tw-coupon",description:"is required to provide a mechanism to allow for the applying of a discount for first eligible users."},{name:"deviceTokenTW",description:"is a required token to keep accounts safe."},{name:"rate-alerts-token",description:"is required to keep the user logged in to the Rate Alerts service to manage their saved rate alerts."},{name:"beta-banner",description:"is used to keep the 'update to Wise' banner from being shown again after being closed"},{name:"tell-me-more-banner",description:"is used to keep the 'changing our name to Wise' banner from being shown again after being closed"},{name:"interstitialDismissed",description:"is used to keep the Wise interstitial from being shown again after being closed"},{name:"currency-converter-app-banner",description:"is used to keep the Currency Converter Android App banner from being shown again after being closed"},{name:"has-agreed-owners-disclaimer",description:"is used to keep the disclaimer from being shown on wise.com/owners/ after being accepted"},{name:"accountDetailsReferralCode",description:"allows us to modify the account details onboarding experience for users referred from known affiliates."},{name:"get-paid-voting",description:"is used to keep the Get Paid voting wishlist banner from being shown again after being closed"},{name:"dismissedNudges",description:"This is used to persist the user dismissal of a nudge component on a page."},{name:"signupToken",description:"This cookie is created on referral landing page after user completes first registration step and passed to /register flow so that we are able to skip completed steps and continue with registration flow."},{name:"has-logged-in",description:"The cookie indicates whether the user has logged in before, therefore needs to be redirected to logged-in app from the homepage"},{name:"dynamic-pricing-screen-shown",description:"The cookie is used to check whether the user has been shown a splash screen when they encounter the dynamic fee (variable Fx fee) for the first time."}],t.optional=[{name:"usr",description:"It stores a value that identifies a user after login. It enables homepage to deliver relevant content to customers."},{name:"hasClickedOnSignUpOrLogin",description:"Provides additional convenience to returning users, such as replacing the register button with a login button to enable quicker log in."},{name:"test.cookie",description:"The test.cookie cookie is used to check if the users browser supports cookies."},{name:"analytics",description:"Connects user behaviour to events in the backend. Contains information on their user profile and whether or not they’ve registered in the past."},{name:"_iz_sd_ss_",description:"used to store data about a visitor in order to make decisions about when to show a survey, like the number of site visits and survey views"},{name:"_hjid",description:"used to obtain data on users’ behaviour for our own statistical and monitoring purposes. (hotjar i am guessing)"},{name:"_hjIncludedInSample",description:"This session cookie is set to let Hotjar know whether that visitor is included in the sample which is used to generate funnels."},{name:"_hjClosedSurveyInvites",description:"is set once a visitor interacts with a Survey invitation modal popup. It is used to ensure that the same invite does not re-appear if it has already been shown."},{name:"_hjDonePolls",description:"is set once a visitor completes a poll using the Feedback Poll widget. It is used to ensure that the same poll does not re-appear if it has already been filled in."},{name:"_hjMinimizedPolls",description:"is set once a visitor minimizes a Feedback Poll widget. It is used to ensure that the widget stays minimizes when the visitor navigates through your site."},{name:"_hjDoneTestersWidgets",description:"is set once a visitor submits their information in the Recruit User Testers widget. It is used to ensure that the same form does not re-appear if it has already been filled in."},{name:"_hjIncludedInSample",description:"is set to let Hotjar know whether that visitor is included in the sample which is used to generate funnels."},{name:"_hjShownFeedbackMessage",description:"is set when a visitor minimizes or completes Incoming Feedback. This is done so that the Incoming Feedback will load as minimized immediately if they navigate to another page where it is set to show."},{name:"_hjRecordingLastActivity",description:"should be found in sessionStorage (as opposed to cookies). This gets updated when a visitor recording starts and when data is sent through the WebSocket (the visitor performs an action that Hotjar records)."},{name:"hjTLDTest",description:"is used when the Hotjar script executes and we try to determine the most generic cookie path we should use, instead of the page hostname. This is done so that cookies can be shared across subdomains (where applicable). To determine this, we try to store the _hjTLDTest cookie for different URL substring alternatives until it fails. After this check, the cookie is removed."},{name:"_hjUserAttributesHash",description:" is used as user attributes are sent through the Hotjar Identify API are cached for the duration of the session in order to know when an attribute has changed and needs to be updated."},{name:"_hjCachedUserAttributes",description:"stores User Attributes which are sent through the Hotjar Identify API, whenever the user is not in the sample. These attributes will only be saved if the user interacts with a Hotjar Feedback tool."},{name:"_iz_uh_ps_",description:"used to store data about a user relating to the number of site visits and survey views, which enables us to make a decision about whether we should undertake a survey about the use of our site"},{name:"mp_*_mixpanel",description:"main mixpanel cookie, used for analytics"},{name:"_gat_*",description:"is installed by Google Universal Analyticsto throttle the request rate to limit the collection of data onhigh traffic sites."},{name:"_gat",description:"is installed by Google Universal Analytics to throttle the request rate to limit the collection of data onhigh traffic sites."},{name:"_gid",description:"used to store information on how visitors use a website and helps in creating an analytics report of how the website is doing."},{name:"_ga",description:"used to calculate visitor, session,campaign data and keep track of site usage for the sites analytics report"},{name:"collect",description:"used to track the user across devices and marketing channels. This data is sent to GoogleAnalytics"},{name:"_dc_gtm_UA*",description:"used to limit the number of requests that we make to Google Analytics."},{name:"fr",description:"facebook marketing"},{name:"_fbp",description:"facebook marketing"},{name:"_tr",description:"facebook marketing"},{name:"AA003",description:"facebook marketing"},{name:"ATN",description:"facebook marketing"},{name:"g_airpr_recent_visit",description:"pr matching marketing"},{name:"_gcl_au",description:"google ads"},{name:"NID",description:"google ads fingerprinting"},{name:"ads/ga-audiences",description:"google ads"},{name:"MUID",description:"bing"},{name:"MUIDB",description:"bing"},{name:"personalization_id",description:"twitter marketing"},{name:"i/adsct",description:"twitter marketing"},{name:"B",description:"yahoo"},{name:"XB",description:"yahoo"},{name:"pagead/conversion/1001035224",description:"yahoo"},{name:"_B",description:"yahoo"},{name:"sc_at",description:"is to anonymously identify device browsers. The benefit of the cookie is to understand the effectiveness of partnering with Snap."},{name:"_sctr",description:"to improve application functionality. The benefit of the cookie is to understand the effectiveness of partnering with Snap."},{name:"_scid",description:"to anonymously identify device browsers. The benefit of the cookie is to understand the effectiveness of partnering with Snap."},{name:"yt-player-*",description:"session-based HTML storage keys that we use to manage the behavior of the integrated YouTube video player."},{name:"yt-remote-*",description:"session-based HTML storage keys that we use to manage the behavior of the integrated YouTube video player."},{name:"feature_x_product_approach",description:"This value is was used to cache whether a specific feature is available for the current customer."},{name:"ppm_fpc",description:"used to identify a unique device. The benefit of the cookie is to understand the effectiveness of our podcast and audio advertising."},{name:"lux_uid",description:"This cookie is used by SpeedCurve to aggregate all pages a visitor views in a single session and track our website performance for that session."}]}));r(l),l.optional,l.essential;var m={accepted:"accepttwcookieconsent"},f={accepted:"accepted",rejected:"rejected"};function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){b(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function b(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function v(e){return!!e&&!(e.expiry-(new Date).getTime()<0)&&e.policyId===u&&e.isEu&&((t=e.status)===f.accepted||t===f.rejected);var t}function y(){var i,o=e(document.cookie).twCookieConsent;v("string"==typeof o?JSON.parse(o):o)||function(e){var i=e.status,o=e.isEu;if(i!==f.accepted&&i!==f.rejected)throw new Error("TWCC: Consent status must be `".concat(f.accepted,"` or `").concat(f.rejected,"`. You provided `").concat(i,"`"));var n=(new Date).getTime()+c,s=JSON.stringify({policyId:u,expiry:n,isEu:o,status:i}),r="wise.com"===window.location.hostname.split(".").slice(-2).join(".");document.cookie=t(h,s,w({expires:new Date(n),maxAge:c/1e3,path:"/",secure:!0,sameSite:"none"},r&&{domain:"wise.com"})),document.cookie=t(p,i===f.accepted,w({expires:new Date(n),maxAge:c/1e3,path:"/",secure:!0,sameSite:"none"},r&&{domain:"wise.com"}))}({status:"accepted",isEu:!1}),(i=document.createEvent("CustomEvent")).initCustomEvent(m.accepted,!0,!0,{}),window.dispatchEvent(i),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:m.accepted})}window.twCookieConsentInitialised||(window.twCookieConsentInitialised=!0,"loading"===document.readyState?document.addEventListener("DOMContentLoaded",y):y())}();
