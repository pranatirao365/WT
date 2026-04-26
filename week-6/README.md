# Week 6 — User Account XML Data Structure

## Overview
This folder contains the solution for **Week 6**, which strictly encompasses designing raw XML structural representations for user account and history abstractions. 

## Requirements Addressed
- **Valid Root**: Contains `<users>` wrapper encapsulating multiple elements. 
- **Attributes**: The `<user>` elements contain an identifiable primary `id` attribute.
- **Fields**: Nodes explicitly define `<username>`, string "encrypted" `<password>` hashes, and `<email>`.
- **Purchase History Sub-tables**: Within each user lies a `<purchaseHistory>` element containing repeating `<book>` items. 
- **Constraints Maintained**: Each `<book>` reflects the `<title>` and `<date>` (forced into standardized `YYYY-MM-DD` formatting).
- **Tooling Constraints**: No JS / HTML needed this week—the XML strictly implements the data formatting requirements. 

## How to Review
Open `users.xml` in a browser to view the XML.

### Presentable View (Recommended)
This week also includes an **XSLT stylesheet** (`users.xsl`). The XML file links to it using:
- `<?xml-stylesheet type="text/xsl" href="users.xsl"?>`

So when you open `users.xml` in a browser (or with VS Code Live Server), it will render as a clean, readable page showing:
- User ID, username, email, encrypted password
- Purchase history in a small table

### If It Doesn’t Style
Some browsers may block XSL when opening via `file://`. Use **VS Code Live Server** (recommended) and open:
- `http://127.0.0.1:5500/week-6/users.xml` (port may differ)