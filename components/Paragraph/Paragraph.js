import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrl } from "utils/relativeToabsoluteUrls";

export function Paragraph({ content, textColor, textAlign }) {
  return (
    <p
      className={`max-w-5xl mx-auto ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrl(content) }}
    />
  );
}
