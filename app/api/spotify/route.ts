export const dynamic = 'error';

export async function GET() {
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/`;
  const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
  const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

  const defaultData = {
    album: "https://i.scdn.co/image/ab67616d00004851c6e0948bbb0681ff29cdbae8",
    artist: "J. Cole",
    title: "January 28th",
    songURL: "https://open.spotify.com/album/0UMMIkurRUmkruZ3KGBLtG",
  };

  // Return default if environment variables are missing
  if (!client_id || !client_secret || !refresh_token) {
    return Response.json(defaultData);
  }

  const authOptions = {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=refresh_token&refresh_token=" + refresh_token,
  };

  try {
    const tokenResponse = await fetch(TOKEN_ENDPOINT, authOptions);
    const tokenData = await tokenResponse.json();
    const token = tokenData.access_token;

    const nowPlayingOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const nowPlayingResponse = await fetch(
      NOW_PLAYING_ENDPOINT,
      nowPlayingOptions
    );
    const song = await nowPlayingResponse.json();

    if (!song.item) {
      return Response.json(defaultData);
    }

    return Response.json({
      album: song.item.album.images[2].url,
      artist: song.item.artists
        .map((_artist: { name: string }) => _artist.name)
        .join(", "),
      title: song.item.name,
      songURL: song.item.external_urls.spotify,
    });
  } catch (error) {
    console.error("Spotify fetch error:", error);
    return Response.json(defaultData);
  }
}
