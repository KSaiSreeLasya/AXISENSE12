# Supabase Integration Guide - Contact Form

## Overview
This document outlines how to set up and use Supabase for storing contact form submissions from your AxiSense.io website.

## Supabase Project Details
- **Project URL**: https://zmdmpwzdcdngefcwepbg.supabase.co
- **Anon Key**: Already configured in `server/routes/contact.ts`

## Setup Instructions

### 1. Create the Database Table

Log into your Supabase dashboard and run the SQL from `SUPABASE_SETUP.sql`:

1. Go to https://app.supabase.com
2. Select your project
3. Navigate to SQL Editor
4. Click "New Query"
5. Copy and paste the entire contents of `SUPABASE_SETUP.sql`
6. Click "Run"

This creates:
- `contact_submissions` table with columns: id, name, email, company, message, submitted_at
- Indexes for faster queries on email and submitted_at
- Row Level Security (RLS) policies for secure access

### 2. Table Schema

```sql
contact_submissions (
  id: UUID (Primary Key)
  name: VARCHAR(255) - Full name of the person
  email: VARCHAR(255) - Email address
  company: VARCHAR(255) - Company name (optional)
  message: TEXT - Contact message
  submitted_at: TIMESTAMP - When the submission was made
  created_at: TIMESTAMP - Record creation timestamp
  updated_at: TIMESTAMP - Last update timestamp
)
```

## API Endpoint

### POST /api/contact

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "I'd like to learn more about your services."
}
```

**Success response (200):**
```json
{
  "success": true,
  "message": "Contact submission received successfully",
  "id": "uuid-of-submission"
}
```

**Error response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

## Features Added

### 1. Frontend Enhancements
- **Form Validation**: Required fields (name, email, message)
- **Error Handling**: Displays user-friendly error messages
- **Loading State**: Submit button shows loading spinner while sending
- **Success Feedback**: Green success message after submission
- **Smooth Animations**: Fade-in, slide-up effects on form elements

### 2. Animations Added
- `animate-fade-in` (0.6s) - Subtle fade in effect
- `animate-slide-up` (0.6s) - Slide up from below with fade
- `animate-slide-down` (0.5s) - Slide down from above with fade
- `animate-slide-in-right` (0.6s) - Slide in from left with fade

All animations use `ease-out` timing for smooth, natural motion.

### 3. Pages Enhanced
- **Contact.tsx**: Complete form integration with Supabase
- **About.tsx**: Added animations to hero, mission, and values sections
- **Global CSS**: New animation keyframes and utility classes

## How the Contact Form Works

1. User fills out the form with name, email, company (optional), and message
2. Form submission validates required fields on the client
3. POST request sent to `/api/contact` endpoint
4. Server validates data and inserts into Supabase
5. Response returned with success/error status
6. Success message displayed with auto-clear after 3 seconds
7. Form fields cleared for next submission

## Security Features

- **RLS Enabled**: Row Level Security policies protect the database
- **Validation**: Server-side validation of required fields
- **Type Safety**: TypeScript interfaces for request/response types
- **CORS Enabled**: Cross-origin requests configured properly
- **Error Handling**: Sensitive errors hidden from clients

## Querying Submissions in Supabase

### Get all submissions (ordered by newest first)
```sql
SELECT * FROM contact_submissions 
ORDER BY submitted_at DESC;
```

### Get submissions from past 7 days
```sql
SELECT * FROM contact_submissions 
WHERE submitted_at >= NOW() - INTERVAL '7 days'
ORDER BY submitted_at DESC;
```

### Get submissions by email
```sql
SELECT * FROM contact_submissions 
WHERE email = 'specific@email.com'
ORDER BY submitted_at DESC;
```

### Count submissions by company
```sql
SELECT company, COUNT(*) as count 
FROM contact_submissions 
WHERE company IS NOT NULL
GROUP BY company
ORDER BY count DESC;
```

### Get submission statistics
```sql
SELECT 
  COUNT(*) as total_submissions,
  COUNT(DISTINCT email) as unique_emails,
  COUNT(DISTINCT company) as unique_companies,
  MIN(submitted_at) as first_submission,
  MAX(submitted_at) as latest_submission
FROM contact_submissions;
```

## Testing the Integration

1. **Development**: Visit http://localhost:8080/contact
2. **Fill the form** with test data
3. **Submit** and verify success message appears
4. **Check Supabase Dashboard**: Navigate to contact_submissions table to see the new entry
5. **Test error handling**: Try submitting with missing required fields

## Troubleshooting

### Table not found error
- Ensure you've run the SQL setup script in Supabase
- Check that the table name is `contact_submissions` (case-sensitive)

### CORS errors
- CORS is enabled in the Express server
- Check browser console for detailed error messages

### Submission not appearing in Supabase
- Verify RLS policies are set correctly
- Check the server logs for any insertion errors
- Confirm the Supabase project URL and key are correct

### Animations not showing
- Verify `client/global.css` has been updated with animation keyframes
- Clear browser cache if needed
- Check browser dev tools for CSS compilation errors

## Next Steps

1. Test the contact form thoroughly
2. Set up email notifications when submissions arrive (optional via Supabase Functions)
3. Create a dashboard view in Supabase to manage submissions
4. Consider adding submission confirmation emails to users
5. Monitor submission metrics and trends

## Files Modified

- `client/pages/Contact.tsx` - Added Supabase integration and animations
- `client/pages/About.tsx` - Added animations
- `client/global.css` - Added animation keyframes
- `server/routes/contact.ts` - New Supabase contact handler
- `server/index.ts` - Registered POST /api/contact route
- `shared/api.ts` - Added TypeScript interfaces

## Support

For issues or questions:
1. Check Supabase documentation: https://supabase.com/docs
2. Review error messages in browser console and server logs
3. Verify all credentials are correct in `server/routes/contact.ts`
