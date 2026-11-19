(function greeting() {
  const createGreeting = function (name) {
    return () => `Hello ${name}`;
  };
  let greet = createGreeting("fahraj");
  document.querySelector(".greet h1").textContent = greet();
})();

(function Main() {
  "use strict";
  const codeDisplay = document.querySelector(".code-display");
  const revealBtn = document.querySelector("#reveal-btn");
  const copyBtn = document.querySelector("#copy-btn");

  const Pcode = () => "SUPER30";

  const once = function (fn) {
    let called = false;
    return function () {
      if (called) {
        return undefined;
      }
      called = true;
      return fn();
    };
  };

  const claimOnce = once(Pcode);
  let A = "";

  revealBtn.addEventListener("click", () => {
    const code = claimOnce();
    if (code) {
      A = code;
      codeDisplay.textContent = code;
      codeDisplay.style.display = "block";
      revealBtn.textContent = "Code Claimed";
      copyBtn.style.display = "inline-block";
      revealBtn.disabled = true;
    }
  });

  copyBtn.addEventListener("click", () => {
    if (A) {
      navigator.clipboard.writeText(A);
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 3000);
    }
  });
})();
