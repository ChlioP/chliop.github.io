import QRCode from "qrcode";
import { copyFile } from "node:fs/promises";

const connectUrl = "https://chliop.github.io/connect";

await QRCode.toFile("public/chliona-connect-qr.png", connectUrl, {
  type: "png",
  width: 1200,
  margin: 8,
  errorCorrectionLevel: "H",
  color: {
    dark: "#181124",
    light: "#FFFFFF",
  },
});

await copyFile(
  "assets/Chliona-Pham-Resume-Data-Analyst-General.pdf",
  "public/resume.pdf",
);

console.log(`Generated public/chliona-connect-qr.png (${connectUrl})`);
