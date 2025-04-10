"use client";

import { useState } from "react";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "louiskarakas.bw@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="cursor-pointer px-4 py-2 bg-gradient-to-r from-[#161A31] to-[#06091F] border border-[#6971A2]/15 font-medium rounded-lg shadow-md transition-all"
    >
      <div className="flex items-center gap-2">
        <img src="/card.svg" alt="Arrow" className="w-5 h-5" />
        {copied ? "Copied!" : "Copy my email address"}
      </div>
    </button>
  );
}
