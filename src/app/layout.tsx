import "./globals.css";
// import "../styles/style.css";
import "../sass/style.scss";

export const metadata = {
  title: "Cotizador Aira",
  description: "Cotizador del desarrollo Aira Residencial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
