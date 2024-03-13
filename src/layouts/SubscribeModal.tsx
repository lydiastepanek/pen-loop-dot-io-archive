import React, { useEffect, useState } from "react";

const SubscribeModal = () => {
  const [subscribeString, setsubscribeString] = useState("");

  // subscribe dom manipulation
  useEffect(() => {
    const subscribeModal = document.getElementById("subscribeModal");
    const subscribeInput = document.getElementById("subscribeInput");
    const subscribeModalOverlay = document.getElementById(
      "subscribeModalOverlay",
    );
    const subscribeResultItems = document.querySelectorAll("#subscribeItem");
    const subscribeModalTriggers = document.querySelectorAll(
      "[data-subscribe-trigger]",
    );

    window.addEventListener("scroll", (event) => {
      console.log("scroll");
      console.log(window.scrollY);
      if (window.scrollY > 1500) {
        const subscribeModal = document.getElementById("subscribeModal");
        subscribeModal!.classList.add("show");
      }
    });

    // subscribe modal open
    subscribeModalTriggers.forEach((button) => {
      button.addEventListener("click", function () {
        const subscribeModal = document.getElementById("subscribeModal");
        subscribeModal!.classList.add("show");
        subscribeInput!.focus();
      });
    });

    // subscribe modal close
    subscribeModalOverlay!.addEventListener("click", function () {
      subscribeModal!.classList.remove("show");
    });
  }, []);

  return (
    <div id="subscribeModal" className="subscribe-modal">
      <div id="subscribeModalOverlay" className="subscribe-modal-overlay" />
      <div className="subscribe-wrapper">
        <div className="subscribe-wrapper-header">
          <form>
            <label
              htmlFor="subscribeInput"
              className="absolute left-7 top-[calc(50%-7px)]"
            >
              <span className="sr-only">subscribe icon</span>
              <svg
                viewBox="0 0 512 512"
                height="18"
                width="18"
                className="-mt-0.5"
              >
                <title>subscribe icon</title>
                <path
                  fill="currentcolor"
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8.0 45.3s-32.8 12.5-45.3.0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9.0 208S93.1.0 208 0 416 93.1 416 208zM208 352a144 144 0 100-288 144 144 0 100 288z"
                ></path>
              </svg>
            </label>
            <input
              id="subscribeInput"
              className="subscribe-wrapper-header-input"
              type="email"
              name="subscribe"
              placeholder="subscribe..."
              required
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
