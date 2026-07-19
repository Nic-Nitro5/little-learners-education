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
          background: "#8f6942",
          borderRadius: "7px",
          color: "#d9b48c",
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
        }}
      >
        L
      </div>
    ),
    { ...size }
  );
}
