import { Fragment } from "react";

/** Renders "plain text **bold text**" with the bold parts wrapped in <strong>. */
export function emphasis(text: string, strongClassName = "") {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={`font-bold ${strongClassName}`}>
        {part}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

/** Plain-text version for metadata and structured data. */
export function stripEmphasis(text: string) {
  return text.replaceAll("**", "");
}
