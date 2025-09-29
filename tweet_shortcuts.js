// ==UserScript==
// @name         Quick Buttons for X (Twitter) - Quotes, Block & Mute
// @namespace    http://tampermonkey.net/
// @version      2025-09-20
// @description  Adds a button to quickly view tweet quotes, as well as block and mute account buttons
// @author       Ashley Connor
// @match        https://x.com/*
// @icon         data:image/png;base64,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
// @run-at       document-end
// @grant        none
// @tag          twitter productivity
// @run-at       https://raw.githubusercontent.com/ashleyconnor/greasemonkey-scripts/refs/heads/main/tweet_shortcuts.js
// @supportURL   https://github.com/ashleyconnor/greasemonkey-scripts
// ==/UserScript==

(() => {
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
    let timelineSelector = 'div[aria-label^="Timeline:"]';

    muts.forEach((m) => {
      // filter elements we don't care about
      let filteredNodes = Array.from(m.addedNodes)
        .map((n) => {
          // look for home timeline elements and clip the container
          if (
            n.querySelector('div[aria-label^="Home timeline"]') &&
            n.querySelector(timelineSelector)
          )
            return n.querySelector(timelineSelector);
          return n;
        })
        .filter(Boolean);

      filteredNodes.forEach((n) => {
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

  function processInitialTweets() {
    document.querySelectorAll("article").forEach((n) => {
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
  }

  processInitialTweets();
  observer.observe(document.body, { subtree: true, childList: true });
})();
