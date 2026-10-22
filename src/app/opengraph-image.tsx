import { ImageResponse } from "next/og";
import { OG_IMAGE } from "@/lib/seo";

export const alt = OG_IMAGE.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E1B2E",
        }}
      >
        <svg width="360" height="360" viewBox="9 2 108 108">
          <g
            fill="none"
            stroke="#F4F6F9"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M40 16 V96 H58 A23 23 0 0 0 58 50 H40" />
            <path d="M22 61.5 H40" />
            <path d="M22 84.5 H40" />
            <path d="M81 73 H92" />
          </g>
          <circle
            cx="101"
            cy="73"
            r="7"
            fill="#C98A3E"
            stroke="#F4F6F9"
            strokeWidth="4"
          />
        </svg>
      </div>
    ),
    size,
  );
}
