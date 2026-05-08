import { ColumnDirective, ColumnsDirective, GridComponent,
  Inject , Toolbar,PdfExport, ExcelExport,
  Page} from '@syncfusion/ej2-react-grids';
import { data } from './datasource';

import './App.css'

function App() {
  let grid;
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_pdfexport') { 
      grid.pdfExport({
        fileName: 'invoice.pdf',
        exportType: 'CurrentPage',
         theme: {
            header: {
              bold: true,
              fontColor: '#000080',
              fontName: 'Calibri',
              fontSize: 10
            },
            record: {
              fontColor:  '#B22222',
              fontName: 'Calibri',
              fontSize: 8
            }
          },
        header: {
           fromTop: 0,
        height: 130,
        contents: [
            {
              type: 'Text',
              value: 'Northwind Traders',
              position: { x:240, y: 50 },
              style: { textBrushColor: '#ec682a', fontSize: 20 },
            },
        ]
        },
        footer: {
        fromBottom: 10,
        height: 60,
        contents: [
            {
                type: 'Line',
                style: { penColor: '#000080', penSize: 2, dashStyle: 'Dot' },
                points: { x1: 0, y1: 4, x2: 685, y2: 4 },
            }
        ]
    }});
    }
  else if (grid && args.item.id === 'Grid_excelexport') {
            grid.excelExport({
fileName: 'invoice.xlsx',
          exportType: 'CurrentPage',
           theme: {
            header: {
              bold: true,
              fontColor: '#000080',
              fontName: 'Calibri',
              fontSize: 10
            },
            record: {
              fontColor:  '#B22222',
              fontName: 'Calibri',
              fontSize: 8
            }
          },
          header: {
            headerRows: 1,
            rows: [
              {
                cells: [{
                  colSpan: 4,
                  value: "Northwind Traders",
                  style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, }
                }]
              }
            ]
          },
          footer: {
            footerRows: 1,
            rows: [
              { cells: [{ colSpan: 5, value: "Thank you for your business!", style: { hAlign: 'Center', bold: true } }] },
            ]

          }
        });
        }

  }


  return <div style={{padding:'20px'}}>
    <GridComponent  dataSource={data} id='Grid' allowPaging={true} pageSettings={{pageSize: 7}}
    toolbar={['PdfExport','ExcelExport']} allowPdfExport={true} toolbarClick={toolbarClick} ref={g => grid = g}
    allowExcelExport={true}
       >
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' 
             textAlign="Right" allowGrouping={false}/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
            <ColumnDirective field='Freight' headerText='Freight' width='100' 
             format='C2' textAlign="Right" />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='100' 
             format='yMd' textAlign="Right"/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100'
          />
        </ColumnsDirective>
       
        <Inject services={[Page, Toolbar,PdfExport,ExcelExport]}/>
    </GridComponent></div>
}

export default App
