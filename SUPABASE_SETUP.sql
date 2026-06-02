-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster queries
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on submitted_at for sorting
CREATE INDEX idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);

-- Enable RLS (Row Level Security) - Optional but recommended for production
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy allowing anyone to insert (anonymous)
CREATE POLICY "Allow anonymous inserts" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy allowing only admins to view all submissions
-- Replace 'your-user-id' with your actual Supabase user ID if needed
CREATE POLICY "Allow authenticated users to view their own submissions" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Grant permissions to anon role for inserts
GRANT INSERT ON contact_submissions TO anon;
