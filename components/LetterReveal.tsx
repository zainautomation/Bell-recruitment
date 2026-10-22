import type { CSSProperties } from "react";

const LETTER_DELAY_MS = 18;

// Attention animation for headings: the text "types itself in" letter by letter when it
// scrolls into view. ScrollReveal adds the `in` class to `.letters`; the CSS staggers each
// letter by --i. Words never break mid-word. Screen readers and search engines get the
// plain text from the visually hidden copy; the visible letters are drawn from `data-c` by CSS
// (.lc::before), so the heading's text exists only once in the HTML.
//
// `accent` is an optional phrase inside `text` that is styled as <em> (white italic in banners).
export default function LetterReveal({ text, accent }: { text: string; accent?: string }) {
  const start = accent ? text.indexOf(accent) : -1;
  const segments =
    start >= 0 && accent
      ? [
          { text: text.slice(0, start), em: false },
          { text: accent, em: true },
          { text: text.slice(start + accent.length), em: false },
        ]
      : [{ text, em: false }];

  let index = 0;
  const renderWords = (segment: string) =>
    segment.split(/(\s+)/).map((token, t) =>
      /^\s+$/.test(token) || token === "" ? (
        token
      ) : (
        <span className="lw" key={t}>
          {Array.from(token).map((char, c) => (
            <span className="lc" key={c} data-c={char} style={{ "--i": index++ } as CSSProperties} />
          ))}
        </span>
      ),
    );

  return (
    <span className="letters" style={{ "--letter-delay": `${LETTER_DELAY_MS}ms` } as CSSProperties}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {segments.map((s, i) => (s.em ? <em key={i}>{renderWords(s.text)}</em> : <span key={i}>{renderWords(s.text)}</span>))}
      </span>
    </span>
  );
}
