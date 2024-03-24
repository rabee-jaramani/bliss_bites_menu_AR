import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-powered-p">
        مع الحب
        <span>
          <FavoriteBorderIcon />
        </span>{" "}
        بليس بايتس
      </p>
    </div>
  );
}
