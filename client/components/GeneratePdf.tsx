import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import { PermitData } from "./PermitData";
import KyambogoLogo from "@/assets/images/kyambogoLogo.png";

export const generatePermitHtml = async (permitData: PermitData) => {
  // Convert logo to base64
  try {
    const asset = Asset.fromModule(KyambogoLogo);
    await asset.downloadAsync();
    const base64Logo = await FileSystem.readAsStringAsync(asset.localUri!, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const logoBase64 = `data:image/png;base64,${base64Logo}`;

    return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @page {
            size: A4;
            margin: 20px;
          }
          body { 
            font-family: system-ui, -apple-system, sans-serif;
            padding: 15px;
            max-width: 100%;
            margin: 0 auto;
            position: relative;
          }
          .watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.05;
            z-index: -1;
            width: 80%;
          }
          .header { 
            text-align: center; 
            margin-bottom: 15px;
            padding: 0 10px;
          }
          .logo { 
            width: 80px; 
            height: auto;
          }
          .student-info { 
            position: relative;
            display: flex; 
            margin: 15px 0;
            padding: 15px 10px;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            gap: 15px;
          }
          .photo-container { 
            flex-shrink: 0;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
          }
          .info-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 8px;
            flex: 1;
          }
          .info-grid p {
            margin: 4px 0;
            font-size: 0.9em;
          }
          .status-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            padding: 4px 8px;
            border-radius: 4px;
            font-weight: bold;
            font-size: 0.8em;
            text-transform: uppercase;
          }
          .table-container { 
            margin: 10px 0;
            overflow-x: auto;
            padding: 0 5px;
          }
          table { 
            width: 100%; 
            border-collapse: collapse; 
            font-size: 0.9em;
            margin-top: 10px;
          }
          th, td { 
            padding: 4px 6px; 
            border: 1px solid #ddd;
            font-size: 0.85em;
          }
          @media print {
            .watermark {
              display: block !important;
            }
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
          }
          .status-valid { background-color: #dcfce7; color: #16a34a; }
          .status-invalid { background-color: #fee2e2; color: #dc2626; }
          .status-expired { background-color: #fef3c7; color: #d97706; }
          .instructions { 
            background-color: #f9fafb; 
            padding: 15px; 
            border-radius: 8px;
            margin-top: 20px;
          }
          .qr-code { 
            text-align: center; 
            margin: 20px 0;
            padding: 20px;
            border-top: 1px solid #eee;
          }
          .footer { 
            text-align: center; 
            color: #6b7280; 
            font-size: 12px;
            margin-top: 20px;
          }
          .section-heading {
            color: #228b22;
            margin: 10px 0 5px 0;
            font-size: 1.2em;
          }
        </style>
      </head>
      <body>
        <img src="${logoBase64}" class="watermark" alt="" />
        <div class="header">
          <img src="${logoBase64}" class="logo" alt="University Logo" />
          <h1 style="color:#228b22;margin:10px 0;font-size:1.5em;">Kyambogo University</h1>
          <p style="color:#16a34a;margin:0;font-size:0.9em;">Knowledge and Skills for Service</p>
        </div>

        <div class="student-info">
          <div class="photo-container">
            ${permitData.photoUrl ? 
              `<img src="${permitData.photoUrl}" style="width:100%;height:100%;object-fit:cover;" />` :
              `<div style="width:100%;height:100%;background:#f3f4f6;"></div>`
            }
          </div>

          <div class="info-grid">
            <div>
              <h2 style="margin:0 0 10px 0;">${permitData.studentName}</h2>
              <p><span style="font-weight:normal;">Gender:</span> <strong>${permitData.gender || ''}</strong></p>
              <p><span style="font-weight:normal;">Reg Number:</span> <strong>${permitData.regNumber}</strong></p>
              <p><span style="font-weight:normal;">Study Year:</span> <strong>${permitData.yearOfStudy}</strong></p>
              <p><span style="font-weight:normal;">Semester:</span> <strong>${permitData.semester}</strong></p>
              <p><span style="font-weight:normal;">Faculty:</span> <strong>${permitData.faculty || ''}</strong></p>
            </div>
            <div>
              <p><span style="font-weight:normal;">Student No:</span> <strong>${permitData.studentNumber}</strong></p>
              <p><span style="font-weight:normal;">Programme:</span> <strong>${permitData.programme}</strong></p>
              <p><span style="font-weight:normal;">Campus:</span> <strong>${permitData.campus}</strong></p>
              <p><span style="font-weight:normal;">Academic Year:</span> <strong>${permitData.academicYear}</strong></p>
              <p><span style="font-weight:normal;">Department:</span> <strong>${permitData.department || ''}</strong></p>
            </div>
          </div>

          <div class="status-badge status-${permitData.status}">
            ${permitData.status === 'valid' ? 
              `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display:inline-block;margin-right:4px;">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>` 
              : ''
            }
            ${permitData.status.toUpperCase()}
          </div>
        </div>

        <div class="table-container">
          <h2 class="section-heading">Registered Course Units</h2>
          <table>
            <tr>
              <th>Code</th>
              <th>Course Unit</th>
              <th style="text-align:center;">CU</th>
              <th>Category</th>
              <th style="text-align:center;">Status</th>
            </tr>
            ${permitData.courseUnits.map(unit => `
              <tr>
                <td>${unit.code}</td>
                <td>${unit.name}</td>
                <td style="text-align:center;">${unit.creditUnits}</td>
                <td>${unit.category}</td>
                <td style="text-align:center;color:${unit.status === 'NORMAL' ? '#16a34a' : '#ea580c'}">
                  ${unit.status}
                </td>
              </tr>
            `).join('')}
          </table>
        </div>

        ${permitData.qrCode ? `
          <div class="qr-code">
            <img src="${permitData.qrCode}" width="150" height="150" alt="QR Code" />
            <p style="margin:5px 0;color:#666;font-size:12px;">Scan to verify</p>
          </div>
        ` : ''}

        <div class="instructions">
          <h3 style="color:#228b22;margin-top:0;">Instructions:</h3>
          <ul style="color:#4b5563;margin:0;padding-left:20px;">
            <li>Present this permit along with your student ID</li>
            <li>Arrive at least 15 minutes before the exam</li>
            <li>Electronic devices are not allowed during the exam</li>
            <li>This QR code will be scanned for verification</li>
            <li>Any permit tampering is considered exam malpractice</li>
          </ul>
        </div>

        <p class="footer">
          Printed on: ${new Date().toLocaleString()}
        </p>
      </body>
    </html>
  `;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF');
  }
};