import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "7px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 21,
            fontWeight: 700,
            letterSpacing: -1,
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
