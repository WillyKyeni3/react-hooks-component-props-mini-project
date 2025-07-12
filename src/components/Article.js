import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculate emoji string based on minutes
  let emoji = "";
  let emojiCount = 0;

  if (minutes < 30) {
    emojiCount = Math.ceil(minutes / 5);
    emoji = "☕️".repeat(emojiCount);
  } else {
    emojiCount = Math.ceil(minutes / 10);
    emoji = "🍱".repeat(emojiCount);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} {emoji} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;