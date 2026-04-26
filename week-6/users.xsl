<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Users (XML View)</title>
        <style>
          body{font-family:Arial,Helvetica,sans-serif;margin:0;background:#f6f7fb;color:#0f172a;}
          header{padding:18px 16px;background:#0f172a;color:#fff;}
          header h1{margin:0;font-size:18px;}
          .container{max-width:1100px;margin:18px auto;padding:0 16px;}
          .note{font-size:13px;color:#475569;margin:10px 0 16px;}
          .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;}
          .card{background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:14px;box-shadow:0 10px 20px rgba(2,6,23,0.06);}
          .row{display:flex;justify-content:space-between;gap:10px;}
          .label{font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:.03em;font-weight:700;}
          .value{font-size:14px;color:#0f172a;word-break:break-word;}
          .pill{display:inline-block;padding:2px 10px;border-radius:999px;font-size:12px;font-weight:700;border:1px solid #e2e8f0;background:#f8fafc;color:#0f172a;}
          .pill--id{border-color:rgba(37,99,235,.25);background:rgba(37,99,235,.08);color:#1d4ed8;}
          ul{margin:8px 0 0;padding-left:18px;}
          li{margin:6px 0;font-size:14px;}
          .muted{color:#475569;}
          table{width:100%;border-collapse:collapse;margin-top:10px;}
          th,td{border:1px solid #e2e8f0;padding:8px 10px;text-align:left;font-size:14px;}
          th{background:#f1f5f9;font-size:12px;text-transform:uppercase;letter-spacing:.03em;color:#475569;}
          .empty{color:#64748b;font-style:italic;}
          footer{padding:14px 16px;color:#64748b;font-size:12px;}
        </style>
      </head>
      <body>
        <header>
          <h1>Online Bookstore — Users (XML Presentation)</h1>
        </header>

        <div class="container">
          <div class="note">
            This page is generated directly from <b>users.xml</b> using <b>XSLT</b> (no JavaScript).
          </div>

          <div class="grid">
            <xsl:for-each select="users/user">
              <div class="card">
                <div class="row" style="align-items:center; margin-bottom:10px;">
                  <div>
                    <div class="label">Username</div>
                    <div class="value"><xsl:value-of select="username" /></div>
                  </div>
                  <div class="pill pill--id">ID: <xsl:value-of select="@id" /></div>
                </div>

                <div style="margin-bottom:10px;">
                  <div class="label">Email</div>
                  <div class="value"><xsl:value-of select="email" /></div>
                </div>

                <div style="margin-bottom:10px;">
                  <div class="label">Password (Encrypted)</div>
                  <div class="value muted"><xsl:value-of select="password" /></div>
                </div>

                <div>
                  <div class="label">Purchase History</div>

                  <xsl:choose>
                    <xsl:when test="count(purchaseHistory/book) &gt; 0">
                      <table>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <xsl:for-each select="purchaseHistory/book">
                            <tr>
                              <td><xsl:value-of select="title" /></td>
                              <td><xsl:value-of select="date" /></td>
                            </tr>
                          </xsl:for-each>
                        </tbody>
                      </table>
                    </xsl:when>
                    <xsl:otherwise>
                      <div class="empty" style="margin-top:8px;">No purchases yet.</div>
                    </xsl:otherwise>
                  </xsl:choose>
                </div>
              </div>
            </xsl:for-each>
          </div>
        </div>

        <footer>
          Tip: Open <b>users.xml</b> in your browser or via Live Server to see this styled view.
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
