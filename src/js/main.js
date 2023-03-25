/* eslint-disable no-undef,  no-unused-vars */
import "../scss/styles.scss";
// Import all of Bootstrap's JS
import { Modal } from "bootstrap";
import * as bootstrap from "bootstrap";

import allPage from "./allPages";
import contentPage from "./contentPage";

document.addEventListener("DOMContentLoaded", () => {
  allPage.initialize();
  contentPage.initialize();
});

let resizeTimer;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    allPage.initialize();
  }, 250);
});

function createPrivacyModal() {
  const modalHtml = `
    <div class="modal fade" id="privacyModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Privacy Policy</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <p>We have implemented Google Analytics to our webpage. No sesntitive or private data will be tracked int his process</p>
            <p>Do you agree to your usage of our website will be tracked for Google Analytics?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Disagree with Privacy policy button">Disagree</button>
            <button type="button" class="btn btn-primary" id="agreeButton" aria-label="Agree with Privacy policy button">Agree</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append the modal HTML to the body of the document
  document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function initializePrivacyModal() {
  const privacyModal = new Modal(document.getElementById("privacyModal"));

  // Check if the user has already agreed to the policy
  const agreed = localStorage.getItem("privacyPolicyAgreed") === "true";
  if (!agreed) {
    // Show the modal if the user hasn't agreed
    privacyModal.show();
  }

  // Handle the click event on the Agree button
  const agreeButton = document.getElementById("agreeButton");
  agreeButton.addEventListener("click", () => {
    // Remember the user's choice
    localStorage.setItem("privacyPolicyAgreed", "true");
    // Hide the modal
    privacyModal.hide();
    // Enable Google Analytics tracking
    gtag("consent", "update", {
      analytics_storage: "granted",
    });
  });
}

function loadGoogleAnalytics() {
  // Replace "GA_MEASUREMENT_ID" with your Google Analytics Measurement ID
  const gaMeasurementId = "G-02X2TPJVQ4";

  // Load the Google Analytics tracking code
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize Google Analytics tracking
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", gaMeasurementId, { anonymize_ip: true });

  // Check if the user has provided consent for Google Analytics tracking
  const consent = localStorage.getItem("googleAnalyticsConsent");
  if (consent === "granted") {
    // Enable Google Analytics tracking if consent has been granted
    gtag("consent", "update", {
      analytics_storage: "granted",
    });
  } else if (consent === "denied") {
    // Disable Google Analytics tracking if consent has been denied
    gtag("consent", "update", {
      analytics_storage: "denied",
    });
  } else {
    // Show the privacy modal if no consent has been given
    initializePrivacyModal();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  createPrivacyModal();
  loadGoogleAnalytics();
});

import currency from "currency.js";

const USD = (value) => currency(value);
const JPY = (value) => currency(value, { precision: 0, symbol: "¥" });
const EURO = (value) =>
  currency(value, { symbol: "€", decimal: ",", separator: "." });

USD(1234.567).format(); // => "$1,234.57"
JPY(1234.567).format(); // => "¥1,235"
EURO(1234.567).format(); // => "€1.234,57"

import moment from "moment";

moment().format("MMMM Do YYYY, h:mm:ss a"); // March 24th 2023, 8:29:07 pm
moment().format("dddd"); // Friday
moment().format("MMM Do YY"); // Mar 24th 23
moment().format("YYYY [escaped] YYYY"); // 2023 escaped 2023
moment().format(); // 2023-03-24T20:29:07-04:00
