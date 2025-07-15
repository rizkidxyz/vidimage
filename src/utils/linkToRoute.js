export function linkToRoute(link) {
  try {
    const url = new URL(link);

    if (link.startsWith("https://videy.co")) {
      const id = url.searchParams.get("id");
      return id ? `/v/${id}` : "";
    }

    if (link.startsWith("https://aceimg.com")) {
      const f = url.searchParams.get("f");
      return f ? `/i/${f}` : "";
    }

    return "";
  } catch (err) {
    console.error("Invalid URL:", err);
    return "";
  }
}
export function linkToCdn(link) {
  try {
    const url = new URL(link);

    if (link.startsWith("https://videy.co")) {
      const id = url.searchParams.get("id");
      return id ? `https://cdn.videy.co/${id}.mp4` : "";
    }

    if (link.startsWith("https://aceimg.com")) {
      const f = url.searchParams.get("f");
      return f ? `https://cdn.aceimg.com/${f}` : "";
    }

    return "";
  } catch (err) {
    console.error("Invalid URL:", err);
    return "";
  }
}