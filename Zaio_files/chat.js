(function () {
  const scriptId = "sib-chat-initialise-script";
  if (document.querySelector("#" + scriptId)) return false;
  const chatDiv = document.createElement("div");
  chatDiv.dataset.component = "ChatComponent";
  chatDiv.setAttribute(
    "data-prop-client-id",
    "eyJhbGciOiJIUzI1NiJ9.MzcxNDg1MA.vGmjDR2neHFNJzy2IcWiwOyenmwmDgPunqm1MWER-cA"
  );
  chatDiv.setAttribute("data-prop-company-name", "Zaio Tech (PTY) Ltd");
  chatDiv.setAttribute(
    "data-prop-avatar-url",
    "https://chat-public.sendinblue.com/3714850-1620218208.png"
  );
  chatDiv.setAttribute("data-prop-primary-color", "#384A5C");
  chatDiv.setAttribute("data-prop-timezone", "Africa/Blantyre");
  if (
    typeof window.sib.custom_welcome_message != "undefined" &&
    window.sib.custom_welcome_message != null
  ) {
    chatDiv.setAttribute(
      "data-prop-welcome-message",
      window.sib.custom_welcome_message
    );
  }
  if (
    typeof window.sib.custom_offline_message != "undefined" &&
    window.sib.custom_offline_message != null
  ) {
    chatDiv.setAttribute(
      "data-prop-offline-message",
      window.sib.custom_offline_message
    );
  }
  if (
    typeof window.sib.display_logo != "undefined" &&
    window.sib.display_logo != null &&
    window.sib.display_logo === 0
  ) {
    chatDiv.setAttribute("data-prop-is-logo-enabled", false);
  }
  chatDiv.setAttribute("data-prop-default-locale", "en_US");
  chatDiv.setAttribute("data-prop-chatbox-availability-type", "dynamic");
  chatDiv.setAttribute("data-prop-is-offline-chatbox-enabled", true);
  document.body.appendChild(chatDiv);
  const chatScript = document.createElement("script");
  chatScript.type = "text/javascript";
  chatScript.id = scriptId;
  chatScript.src = "https://chat.sendinblue.com/static/js/sib-chat.js";
  document.body.appendChild(chatScript);
})();
