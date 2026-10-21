import * as XLSX from 'xlsx';
import * as path from 'path';

export class ExcelReader {
    static readExcel(sheetName: string) {
        const filePath = path.join(process.cwd(), 'utilities', 'PROCUsercreation.xlsx');
  
        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json(worksheet);
    }
}