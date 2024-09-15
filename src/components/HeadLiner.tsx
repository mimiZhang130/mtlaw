import { useState } from "react";
const HeadLiner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the pop-up
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the pop-up
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div
      className="flex-container"
      style={{
        justifyContent: "flex-end",
        backgroundColor: "#00467f",
      }}
    >
      <button
        onClick={openPopup}
        style={{ backgroundColor: "var(--primary-color)", border: "none" }}
      >
        <img
          src="/assets/HeadLiner/wechat-app-icon.svg"
          style={{ margin: ".5rem 1.5rem" }}
        ></img>
      </button>
      <a
        href="tel:+18003451899"
        className="image-color-white"
        style={{ margin: ".5%" }}
      >
        <img src="/assets/HeadLiner/phone-icon.svg"></img>
      </a>
      <a href="/en" style={{ padding: ".5% 2%", color: "white" }}>
        English
      </a>
      <a href="/cn" style={{ padding: ".5% 2%", color: "white" }}>
        简体中文
      </a>

      {
        /* Pop-up */
        isPopupOpen && (
          <div className="wechat-pop-up">
            <button
              onClick={closePopup}
              style={{
                backgroundColor: "white",
                border: "none",
                position: "absolute",
                right: "0%",
                width: "40px",
                height: "40px",
              }}
            >
              <img src="/assets/HeadLiner/close-line-icon.svg"></img>
            </button>

            <img
              style={{ height: "346px", width: "256px" }}
              src="/assets/HeadLiner/wechat_code.jpg"
            ></img>
          </div>
        )
      }
    </div>
  );
};

export default HeadLiner;
