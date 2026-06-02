/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  company: string;
  message: string;
  submitted_at?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  id?: string;
}
