// ==UserScript==
// @name         Quick Buttons for X (Twitter) - Quotes, Block & Mute
// @namespace    http://tampermonkey.net/
// @version      2025-09-20
// @description  Adds a button to quickly view tweet quotes, as well as block and mute account buttons
// @author       Ashley Connor
// @match        https://x.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const quoteBtnStyles = `
  .custom-btn {
    color: rgb(113, 118, 123);
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .custom-btn svg {
    width: 1.25em;
    height: 1.25em;
    fill: currentcolor;
  }
  .custom-btn:hover {
    color: rgb(29, 155, 240);
  }

  button[aria-label="Grok actions"] {
    padding-bottom: 5px !important;
  }
  `;

  const iconPath = {
    quote:
      "M 7.053847 20.893738 C 7.529781 20.893738 7.85342 20.646301 8.424509 20.132263 L 11.717916 17.210083 L 17.819254 17.210083 C 20.655815 17.210083 22.178652 15.639526 22.178652 12.850647 L 22.178652 5.559448 C 22.178652 2.770569 20.655815 1.200012 17.819254 1.200012 L 5.559479 1.200012 C 2.732462 1.200012 1.2 2.760986 1.2 5.559448 L 1.2 12.850647 C 1.2 15.649048 2.732462 17.210083 5.559479 17.210083 L 6.016326 17.210083 L 6.016326 19.684875 C 6.016326 20.417847 6.397065 20.893738 7.053847 20.893738 Z M 7.444089 19.151855 L 7.444089 16.391541 C 7.444089 15.877502 7.253739 15.677612 6.730207 15.677612 L 5.568982 15.677612 C 3.636734 15.677612 2.732462 14.697205 2.732462 12.841125 L 2.732462 5.559448 C 2.732462 3.703369 3.636734 2.732483 5.568982 2.732483 L 17.819254 2.732483 C 19.741919 2.732483 20.646271 3.703369 20.646271 5.559448 L 20.646271 12.841125 C 20.646271 14.697205 19.741919 15.677612 17.819254 15.677612 L 11.651314 15.677612 C 11.12778 15.677612 10.851739 15.753784 10.490006 16.125 Z M 8.691048 9.585815 C 8.691048 8.900513 8.110414 8.319824 7.425083 8.319824 C 6.730207 8.319824 6.159119 8.900513 6.159119 9.585815 C 6.159119 10.271118 6.739751 10.851746 7.425083 10.851746 C 8.110414 10.851746 8.691048 10.271118 8.691048 9.585815 Z M 13.021935 9.585815 C 13.021935 8.900513 12.441302 8.319824 11.756011 8.319824 C 11.07064 8.319824 10.490006 8.900513 10.490006 9.585815 C 10.490006 10.271118 11.080183 10.851746 11.756011 10.851746 C 12.441302 10.851746 13.021935 10.271118 13.021935 9.585815 Z M 17.362366 9.585815 C 17.362366 8.900513 16.781734 8.319824 16.086901 8.319824 C 15.401567 8.319824 14.820934 8.900513 14.820934 9.585815 C 14.820934 10.271118 15.411111 10.851746 16.086901 10.851746 C 16.781734 10.851746 17.362366 10.271118 17.362366 9.585815 Z",
    block:
      "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08L17.09 5.5C15.68 4.4 13.92 3.75 12 3.75zm6.5 3.17L6.92 18.5c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z",
    mute: "M18 6.59V1.2L8.71 7H5.5C4.12 7 3 8.12 3 9.5v5C3 15.88 4.12 17 5.5 17h2.09l-2.3 2.29 1.42 1.42 15.5-15.5-1.42-1.42L18 6.59zm-8 8V8.55l6-3.75v3.79l-6 6zM5 9.5c0-.28.22-.5.5-.5H8v6H5.5c-.28 0-.5-.22-.5-.5v-5zm6.5 9.24l1.45-1.45L16 19.2V14l2 .02v8.78l-6.5-4.06z",
  };

  // insert styles if not already present
  if (!document.getElementById("custom-quote-btn-style")) {
    const style = document.createElement("style");
    style.id = "custom-quote-btn-style";
    style.textContent = quoteBtnStyles;
    document.head.appendChild(style);
  }

  const tweetMenuSelector = 'button[aria-label="More"]';

  function insertCustomButton(container, className, iconPath, callback) {
    if (
      !container.querySelector(
        `article[data-testid="tweet"]:has(${tweetMenuSelector})`
      )
    ) {
      return;
    }

    // button already exists
    if (container.querySelector(`.${className}`)) return;

    const menuBtn = container.querySelector(tweetMenuSelector);

    if (menuBtn) {
      // create a button
      const btn = document.createElement("button");
      btn.innerHTML = `<svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${iconPath}"/></svg>`;
      btn.className = `${className} custom-btn`;
      btn.onclick = () => {
        console.log("custom button clicked");
        callback(container, btn);
      };

      // insert before menu button
      // so brittle but there's no better way

      let ancestor = menuBtn;

      for (let i = 0; i < 3; i++) {
        if (!ancestor) break;
        ancestor = ancestor.closest("div")?.parentElement;
      }

      ancestor.prepend(btn);
    }
    return;
  }

  let quoteTweetsCallback = (container) => {
    // custom button click handler
    // open submenu
    container.querySelector('[aria-label="More"]')?.click();

    // give menu time to open then click quote
    setTimeout(() => {
      document.querySelector('a[data-testid="tweetEngagements"]')?.click();
    }, 10);
  };

  let muteTweetsCallback = (container) => {
    // custom button click handler
    // open submenu
    container.querySelector('[aria-label="More"]')?.click();
    // give menu time to open then click mute
    setTimeout(() => {
      for (const menu_item of document.querySelectorAll(
        '[role="menuitem"] span'
      )) {
        if (menu_item && menu_item.textContent.includes("Mute")) {
          menu_item.click();
          break;
        }
      }
    }, 10);
  };

  let blockTweetsCallback = (container) => {
    // custom button click handler
    // open submenu
    container.querySelector('[aria-label="More"]')?.click();
    // give menu time to open then click block
    setTimeout(() => {
      for (const menu_item of document.querySelectorAll(
        '[role="menuitem"] span'
      )) {
        if (menu_item && menu_item.textContent.includes("Block @")) {
          menu_item.click();
          break;
        }
      }

      setTimeout(
        () =>
          document
            .querySelector('[data-testid="confirmationSheetConfirm"]')
            .click(),
        10
      );
    }, 10);
  };

  // insert button for quote tweets when added to DOM
  const observer = new MutationObserver((muts) => {
    muts.forEach((m) => {
      m.addedNodes.forEach((n) => {
        insertCustomButton(
          n,
          "one-click-quote-btn",
          iconPath.quote,
          quoteTweetsCallback
        );
        insertCustomButton(
          n,
          "one-click-mute-btn",
          iconPath.mute,
          muteTweetsCallback
        );
        insertCustomButton(
          n,
          "one-click-block-btn",
          iconPath.block,
          blockTweetsCallback
        );
      });
    });
  });

  observer.observe(document.body, { subtree: true, childList: true });
})();
