
import requests
from bs4 import BeautifulSoup

# URL to scrape
url = 'https://www.zaubacorp.com/company-list/p-1-company.html'

# Send a GET request to the URL
response = requests.get(url)
response.raise_for_status()  # Ensure the request was successful

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Find the table containing the company data
table = soup.find('table', class_='table')

# List to store the company data
companies = []

# Loop through the rows of the table (skipping the header row)
for row in table.find_all('tr')[1:]:
    cols = row.find_all('td')
    if len(cols) >= 2:
        cin = cols[0].text.strip()
        company_name = cols[1].text.strip()
        companies.append((cin, company_name))

# Print the list of companies
for cin, name in companies:
    print(f"CIN: {cin}, Company Name: {name}")

# If you want to save the data to a CSV file
import csv

with open('companies.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['CIN', 'Company Name'])
    writer.writerows(companies)