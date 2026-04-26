# Week 5 — XML Structure & Data Fetching

## Overview
This week demonstrates XML parsing and dynamic data injection. An online book catalog serves as the subject matter where data revolves centrally from an XML structure instead of a regular JavaScript array or API endpoint, satisfying requirements around XML design, `DOMParser`, and Fetch APIs.

## How to Run (Important CORS Note)
If you double-click `index.html` to open it locally via `file://`, modern browsers might throw a "CORS" fetch error preventing the `.xml` file from loading due to security rules surrounding local directories and file protocol requests. 

**Working Methods to open the page successfully:**
1. **Live Server in VS Code:** Use the popular extension "Live Server" (Right-click `week-5/index.html` and select "Open with Live Server"). 
2. Or spin up a tiny python server where the project rests: `python -m http.server` and visit `http://localhost:8000/week-5/`.

## Features Delivered
- **Custom XML Catalog:** Designed a robust XML data schema (`book_catalog.xml`) encompassing ID, Author, Titles, Genre, Pricing with currency attributes, and explicit Availability statuses.
- **Dynamic Retrieval (`Fetch API`):** Implemented JavaScript that retrieves XML asynchronously using standard Promise architectures.
- **XML DOM Parsing:** Employs the browser-native `DOMParser().parseFromString()` to interpret raw text inputs correctly into navigable DOM node trees.
- **Dynamic Rendering Templates:** Extracts values safely using tag names and builds UI structures (Book Cards) via JavaScript literal string templates (`...`) directly to the DOM natively.
- **Aesthetic Excellence:** Adhered strictly to the Week-3 frosted-glass style guide requested previously with dynamic conditional badge assignments mapping specific stock-levels & availability to semantic colors (green, amber, red).