import { QRCodeSVG } from "qrcode.react";
import "../styles/connect.css";

type PortfolioQRCodeProps = {
  url: string;
  href?: string;
};

export function PortfolioQRCode({ url, href = url }: PortfolioQRCodeProps) {
  return (
    <div className="portfolio-qr">
      <div className="portfolio-qr__code" aria-hidden="true">
        <QRCodeSVG
          value={url}
          size={220}
          level="H"
          marginSize={4}
          bgColor="#ffffff"
          fgColor="#181124"
          title="QR code for Chliona Pham's connect page"
        />
      </div>
      <p>Scan to view my student profile</p>
      <a href={href} aria-label="Open Chliona Pham's connect page">
        chliop.github.io/connect
      </a>
    </div>
  );
}
