import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PdfButton = ({ id, label }) => {
  const clickHandler = () => {
    const input = document.getElementById(id);

    html2canvas(input).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF("p", "mm");
      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("luchko_igor.pdf");
    });
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={clickHandler}>
      {label}
    </div>
  );
};

export default PdfButton;
