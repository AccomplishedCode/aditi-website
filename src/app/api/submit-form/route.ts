import { NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/sheets'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    await appendToSheet(data)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
} 