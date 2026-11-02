// 恆安里網站設定檔：只需要改這個檔案，不用動 index.html。
// 留空的項目，網頁會自動改成「複製內容後寄信」的備用模式。
window.CONFIG = {
  // 表單 A「給朱明濱的話」
  feedback: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfcN8cxV7ffSK5csUn5EPZ_yHe12BVq4DuCPwzfA6qxD7FtHg/formResponse",
    fields: {
      name: "entry.2011304920",     // 稱呼
      lin: "entry.384365859",       // 住在哪一鄰
      kind: "entry.792443600",      // 想說的是
      text: "entry.192085385",      // 留言內容
      contact: "entry.1435534606"   // 聯絡方式
    }
  },
  // 表單 B「恆安回憶牆」
  memory: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSejwW4QeTgEZUpBSAKLtcDftcKSFNOZdx7KMBXAcAO_jz8eSA/formResponse",
    fields: {
      name: "entry.1479889779",     // 名字或暱稱
      lin: "entry.663690350",       // 住在哪一鄰
      topic: "entry.1640001436",    // 回憶類別
      text: "entry.924278737",      // 寫下你的回憶
      consent: "entry.2077043882"   // 是否同意公開分享
    }
  },
  // 試算表「公開牆」分頁發布出來的 CSV 連結（只放已審核可公開的回憶）。做好公開牆後貼在這裡。
  wallCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR96i0W2AdTX1CntPWxNd6XkhGhnYwtplspltgSYJg1rod4MsVtFdHuwwZIeKP7hhZM-4wpCtKa1Pjq/pub?gid=1895344402&single=true&output=csv"
};
