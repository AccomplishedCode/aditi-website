import { google } from 'googleapis'

// Define the type for form data
interface FormData {
  email: string
  phone: string
  callbackTime: string
  reason: string
  details?: string
}

export async function appendToSheet(data: FormData) {
  try {
    // Ensure environment variables exist
    if (!process.env.GOOGLE_SHEETS_CREDENTIALS || !process.env.SHEET_ID) {
      throw new Error('Missing required environment variables')
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    
    // Append the data
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A:F', // Updated to include timestamp column
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          data.email,
          data.phone,
          data.callbackTime,
          data.reason,
          data.details || '', // Handle optional field
          new Date().toISOString()
        ]],
      },
    })

    return response.data
  } catch (error) {
    console.error('Error appending to sheet:', error)
    throw error
  }
} 