import QRCode from "qrcode";

export interface QRCodeOptions {
  size?: number;
  margin?: number;
  darkColor?: string;
  lightColor?: string;
  errorCorrectionLevel?: "L" | "M" | "Q" | "H";
}

export async function drawQRCodeToCanvas(
  canvas: HTMLCanvasElement,
  text: string,
  options: QRCodeOptions = {}
): Promise<void> {
  if (!canvas || !text) return;

  const {
    size = 200,
    margin = 2,
    darkColor = "#000000",
    lightColor = "#ffffff",
    errorCorrectionLevel = "M",
  } = options;

  try {

    console.log("Generating QR:", text);
    await QRCode.toCanvas(canvas, text, {
      width: size,
      margin,
      errorCorrectionLevel,
      color: {
        dark: darkColor,
        light: lightColor,
      },
    });

  } catch (err) {
    console.error("Failed to generate QR code:", err);
  }
}

/**
 * Returns a PNG Data URL.
 * Useful for Download QR.
 */
export async function generateQRCodeDataURL(
  text: string,
  options: QRCodeOptions = {}
): Promise<string> {
  const {
    size = 400,
    margin = 2,
    darkColor = "#000000",
    lightColor = "#ffffff",
    errorCorrectionLevel = "M",
  } = options;

  return QRCode.toDataURL(text, {
    width: size,
    margin,
    errorCorrectionLevel,
    color: {
      dark: darkColor,
      light: lightColor,
    },
  });
}

/**
 * Downloads the QR as PNG.
 */
export async function downloadQRCode(
  text: string,
  filename = "poll-qr.png"
): Promise<void> {
  const dataUrl = await generateQRCodeDataURL(text);

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  link.click();
}