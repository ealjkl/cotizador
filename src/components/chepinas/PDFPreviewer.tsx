"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { saveAs } from "file-saver";

const PDFDocument = dynamic(
  () => import("react-pdf").then((module) => module.Document),
  { ssr: false }
);

const PDFPage = dynamic(
  () => import("react-pdf").then((module) => module.Page),
  { ssr: false }
);

interface PDFPreviewerProps {
  url: string;
}

export const PDFPreviewer: React.FC<PDFPreviewerProps> = ({ url }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const { pdfjs } = require("react-pdf");
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    }
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const downloadFile = async () => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, "download.pdf");
    } catch (err) {
      console.error("Error during file download", err);
    }
  };

  return (
    <div>
      <button onClick={downloadFile}>Download</button>
      {isClient && (
        <div style={{ width: 600 }}>
          <PDFDocument
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            onItemClick={(ev) => {}}
          >
            <PDFPage pageNumber={pageNumber} width={600} />
          </PDFDocument>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      )}
    </div>
  );
};
