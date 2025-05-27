//   useEffect(() => {
//     const tableElement = $(".dataTable");

//     if (!tableElement.length) return;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const table = (tableElement as any).DataTable();
//     if (!table || typeof table.row !== "function") return;

//     const tbodySelector = tableElement.find("tbody");

//     tbodySelector.on("click", "td.dt-control", function () {
//       const tr = $(this).closest("tr");
//       if (!tr.length) return;
//       const row = table.row(tr);
//       if (!row || row.length === 0 || typeof row.child !== "function") return;    

//       if (row.child.isShown()) {
//         row.child.hide();
//         tr.removeClass("shown");
//       } else {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         const rowArrayData = row.data() as any[];

//         const studentData = rowArrayData[8];

//         if (!studentData) {
//             console.error("No se encontró el objeto Estudiante en los datos de la fila.");
//             row.child("<div>Error: Datos detallados no disponibles.</div>").show();
//             tr.addClass("shown");
//             return;
//         }

//         const detalle = `
// <div style="padding:10px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 4px; margin: 5px 0;">
//   <h5 style="margin-top:0; margin-bottom:10px; font-weight:bold; color:#333;">Detalles Adicionales:</h5>
//   <table style="width:100%; border-collapse: collapse;">
//     <tbody>
//       <tr>
//         <td style="font-weight:bold; width:150px; padding: 5px; border-bottom: 1px solid #eee;">Tipo de documento de identidad del estudiante:</td>
//         <td style="padding: 5px; border-bottom: 1px solid #eee;">${studentData?.tipo_documento || 'N/A'}</td>
//       </tr>
//       <tr>
//         <td style="font-weight:bold; width:150px; padding: 5px; border-bottom: 1px solid #eee;">Número de documento de identidad del estudiante:</td>
//         <td style="padding: 5px; border-bottom: 1px solid #eee;">${studentData?.documento_identidad || 'N/A'}</td>
//       </tr>
//       <tr>
//         <td style="font-weight:bold; width:150px; padding: 5px; border-bottom: 1px solid #eee;">Dirección del estudiante:</td>
//         <td style="padding: 5px; border-bottom: 1px solid #eee;">${studentData?.direccion || 'N/A'}</td>
//       </tr>
//       <tr>
//         <td style="font-weight:bold; width:150px; padding: 5px; border-bottom: 1px solid #eee;">RUT del estudiante:</td>
//         <td style="padding: 5px; border-bottom: 1px solid #eee;">${studentData?.rut || 'N/A'}</td>
//       </tr>
//       <tr>
//         <td style="font-weight:bold; width:150px; padding: 5px; border-bottom: 1px solid #eee;">Nombres y apellidos del acudiente:</td>
//         <td style="padding: 5px; border-bottom: 1px solid #eee;">${studentData?.representante.nombres} ${studentData?.representante.apellidos}</td>
//       </tr>
//       <tr>
//         <td style="font-weight:bold; width:150px; padding: 5px; border-bottom: 1px solid #eee;">Tipo de documento de identidad del acudiente:</td>
//         <td style="padding: 5px; border-bottom: 1px solid #eee;">${studentData?.representante.tipo_documento || 'N/A'}</td>
//       </tr>
//       <tr>
//         <td style="font-weight:bold; width:150px; padding: 5px; border-bottom: 1px solid #eee;">Número de documento de identidad del acudiente:</td>
//         <td style="padding: 5px; border-bottom: 1px solid #eee;">${studentData?.representante.documento_identidad || 'N/A'}</td>
//       </tr>
//       <tr>
//         <td style="font-weight:bold; width:150px; padding: 5px; border-bottom: 1px solid #eee;">RUT del acudiente:</td>
//         <td style="padding: 5px; border-bottom: 1px solid #eee;">${studentData?.representante.rut || 'N/A'}</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// `;
//         console.log("Child row HTML content:", detalle);
//         row.child(detalle).show();
//         tr.addClass("shown");
//       }
//     });

//     return () => {
//       tbodySelector.off("click", "td.dt-control");
//     };
//   }, [tableData]);

//                 {
//                 className: "dt-control",
//                 orderable: false,
//                 data: null,
//                 defaultContent: '',
//                 targets: 0,
//               },
// order: [[1, "asc"]],