"use client";

import { useState } from "react";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppBar from "@/components/WhatsAppBar";

export default function BottomBars() {
  const [cookieVisible, setCookieVisible] = useState(false);

  return (
    <>
      <CookieBanner onVisibilityChange={setCookieVisible} />
      <WhatsAppBar cookieVisible={cookieVisible} />
    </>
  );
}
