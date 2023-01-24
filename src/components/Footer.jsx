import React from "react";

function Footer() {
  const date = new Date();

  return (
    <div className="footer">
      <p>{date.getFullYear()}</p>
    </div>
  );
}

export default Footer;
