
import express from "express";

const app = express();
const PORT = 3001;

app.get("/api/google-reviews", async (_req, res) => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(500).json({
      error: "Google Places API is not configured.",
    });
  }

  try {
    const url = new URL(
      `https://places.googleapis.com/v1/places/${placeId}`
    );

    url.searchParams.set("languageCode", "en");

    const response = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": [
          "displayName",
          "rating",
          "userRatingCount",
          "reviews",
        ].join(","),
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Google Places API error:", data);
      return res.status(response.status).json({
        error: "Unable to load Google reviews.",
      });
    }

    res.setHeader("Cache-Control", "no-store");
    return res.json(data);
  } catch (error) {
    console.error("Review request failed:", error);

    return res.status(500).json({
      error: "Unable to retrieve Google reviews.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Reviews API running on port ${PORT}`);
});
