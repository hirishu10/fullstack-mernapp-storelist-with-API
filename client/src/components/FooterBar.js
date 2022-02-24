import React from "react";
import { CardImg } from "reactstrap";

const FooterBar = () => {
  return (
    <div
      className="bg-dark text-light"
      style={{
        width: "100%",
        height: 50,
        marginTop: 443,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 50,
          textAlign: "center",
          paddingTop: 10,
        }}
      >
        {`Made with 🤍  Rishu Chowdhary (MERN App)`}
        <div
          style={{ fontSize: 10 }}
        >{`MERN APP => MongoDB, Express, React, Node.js, Redux, JWT, etc.`}</div>
      </div>
      {/*  */}
      <div
        style={{
          width: 50,
          height: 30,
          backgroundColor: "#252D3A",
          marginRight: 5,
        }}
      >
        <CardImg
          src="https://raw.githubusercontent.com/hirishu10/my-assets/main/top_log.png"
          alt="my-logo"
          style={{ cursor: "pointer" }}
        />
      </div>
      {/*  */}
    </div>
  );
};

export default FooterBar;
