import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "linear-gradient(135deg, #f5efe6 0%, #d9b48c 45%, #8f6942 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 116,
            fontWeight: 700,
            letterSpacing: -4,
            color: "#5c4227",
            fontFamily: "Georgia, serif",
          }}
        >
          LL
        </div>
      </div>
    ),
    { ...size }
  );
}
