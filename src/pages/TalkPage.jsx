import React from "react";
import "../styles.css";

export default function TalkPage() {
  return (
    <div className="Talk">
      {" "}
      <article className="articleTalk">
        <div className="pTalk">
          <p className="pTalkTitle">We build award-winning digital products.</p>
          <p className="pTalkContent">Oursky can help you create one.</p>
        </div>

        <div className="pTalkIcon">
          <button>Lets'talk</button>
        </div>
      </article>
    </div>
  );
}
