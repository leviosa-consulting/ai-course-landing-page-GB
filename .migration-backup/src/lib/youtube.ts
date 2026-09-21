/** Extracts the video ID from any common YouTube link (or returns a bare ID unchanged). */
export function getYouTubeId(url: string): string | null {
  const value = url.trim();
  if (!value) return null;
  if (/^[\w-]{11}$/.test(value)) return value;

  try {
    const parsed = new URL(value);
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1, 12) || null;
    const fromQuery = parsed.searchParams.get("v");
    if (fromQuery) return fromQuery;
    const match = parsed.pathname.match(/\/(?:embed|shorts|live)\/([\w-]{11})/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}
