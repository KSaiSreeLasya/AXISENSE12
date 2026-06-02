import { RequestHandler } from "express";
import { ContactSubmission, ContactResponse } from "@shared/api";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zmdmpwzdcdngefcwepbg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptZG1wd3pkY2RuZ2VmY3dlcGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzOTI5MTEsImV4cCI6MjA5NTk2ODkxMX0.RcGBvUoETHAk-H0IpvZQcruUEpNHFdT8M7hXeIqG9gE";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const handleContactSubmission: RequestHandler = async (req, res) => {
  try {
    const { name, email, company, message } = req.body as ContactSubmission;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      } as ContactResponse);
    }

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          company,
          message,
          submitted_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to submit contact form",
      } as ContactResponse);
    }

    res.json({
      success: true,
      message: "Contact submission received successfully",
      id: data?.[0]?.id,
    } as ContactResponse);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    } as ContactResponse);
  }
};
