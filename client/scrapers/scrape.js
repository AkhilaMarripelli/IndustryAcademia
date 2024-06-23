import puppeteer from 'puppeteer';
import reader from 'xlsx';

async function scrapeData(url) {
    try {
        const browser = await puppeteer.launch({ headless: false }); 
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 120000 });

        await page.waitForSelector('table', { timeout: 120000 });

        const tableData = await page.evaluate(() => {
            const rows = Array.from(document.querySelectorAll('table tr'));
            return rows.map(row => {
                const headers = row.querySelectorAll('th');
                const columns = row.querySelectorAll('td');
                const headers_data =  Array.from(headers).map(header => header.innerText);
                const columns_data = Array.from(columns).map(column => column.innerText);
                return [...headers_data,...columns_data];
            });
        });
        
        await browser.close();
        return tableData;

    } catch (error) {
        console.error('Error occurred:', error);
        return [];
    }
}

scrapeData('https://www.csr.gov.in/content/csr/global/master/home/home/csr-expenditure--geographical-distribution/state/district/company.html?=J.%20P.%20Morgan%20Services%20India%20Private%20Limited=U72900MH2000PTC124073=FY%202021-22');

function getURL(name,cin){
    const encoded = encodeURI(`https://www.mca.gov.in/content/csr/global/master/home/home/csr-expenditure--geographical-distribution/state/district/company.html?=${name}=${cin}=FY 2015-16`);
    return encoded;
}

// getNext('RELIANCE INDUSTRIES LIMITED','L17110MH1973PLC019786');

function getData() {
    const file = reader.readFile('./CSRExpenditureDetails_2015_16_29042017.xlsx');
    let data = [];
    // Define the desired keys
    const desiredKeys = ['S_No', 'CIN', 'Name', 'CSR_Spent']; // Adjust these keys as needed

    
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[1]],{header : 1}) 
    temp.forEach((row) => {
        let newRow = {};

        desiredKeys.forEach((key, index) => {
            // Map the Excel column value to the desired key
            newRow[key] = row[index] || null;
        });

        data.push(newRow);
    });

    return data; // Return the data for further processing if needed
}

async function consolidateData(){
    let data = getData();
    data = data.slice(2);
    for(let i = 0;i < 100;i++){
        const url = getURL(data[i].Name,data[i].CIN);
        const got = await scrapeData(url);
        if(!got || !got[1]) continue;
        const dev = got[1][2];
        const state = got[1][3];
        const dis = got[1][4];
        if(dev && state && dis){
            data[i].developmentSector = 'water';
            data[i].state = state;
            data[i].district = dis;
        }
    }
    data = data.filter((obj) => {
        return obj.developmentSector && obj.state && obj.district && obj.developmentSector.includes('water') && obj.CSR_Spent > 0.1;
    });
    const newfile = reader.read('./new.xlsx');
    const ws = reader.utils.json_to_sheet(data);
    reader.utils.book_append_sheet(newfile,ws,'Sheet2');
    reader.writeFile(newfile,'./new.xlsx');
}

consolidateData();




