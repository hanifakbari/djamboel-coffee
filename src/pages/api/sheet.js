import { google } from "googleapis";

async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Email, Message } = req.body;
    // console.log(Name, Email, Message);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY,
      },

      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: "1QfIBawTX-PUapNRi4-7POplzftmH_ikULMpSj7YIc7E",
      range: "Sheet1!A1:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[Name, Email, Message]],
      },
    });
    res
      .status(201)
      .json({ message: "Data Successfully entered into google sheets" });
  }
  res.status(200).json({ message: "Hallo" });
}

export default handler;
