
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BuddySignupRequest {
  applicantName: string;
  applicantEmail: string;
  location: string;
  bio: string;
  specialties: string[];
  languages: string[];
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { applicantName, applicantEmail, location, bio, specialties, languages }: BuddySignupRequest = await req.json();

    // Send email to the applicant
    const emailResponse = await resend.emails.send({
      from: "Ghana Welcome Platform <onboarding@resend.dev>",
      to: [applicantEmail],
      subject: "Buddy Application Received - Next Steps Required",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #ef4444, #f97316, #22c55e); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to the Buddy Program!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1f2937; margin-top: 0;">Dear ${applicantName},</h2>
            
            <p style="color: #374151; line-height: 1.6;">
              Thank you for your interest in becoming a Cultural Buddy! We've received your application and are excited to have you join our community of helpers.
            </p>
            
            <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Next Steps - Please Provide:</h3>
              <ul style="color: #1e3a8a; margin: 10px 0;">
                <li><strong>Government-issued ID</strong> (Passport, National ID, or Driver's License)</li>
                <li><strong>Proof of residence</strong> in ${location}</li>
                <li><strong>Two professional references</strong> with contact information</li>
                <li><strong>Brief video introduction</strong> (2-3 minutes) telling us about yourself</li>
                <li><strong>Language proficiency certificates</strong> (if applicable)</li>
              </ul>
            </div>
            
            <h3 style="color: #1f2937;">Your Application Summary:</h3>
            <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #d1d5db;">
              <p><strong>Location:</strong> ${location}</p>
              <p><strong>Specialties:</strong> ${specialties.join(', ')}</p>
              <p><strong>Languages:</strong> ${languages.join(', ')}</p>
              <p><strong>Bio:</strong> ${bio}</p>
            </div>
            
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
              <h4 style="color: #92400e; margin-top: 0;">Vetting Process Timeline:</h4>
              <ol style="color: #92400e; margin: 10px 0;">
                <li>Document verification (2-3 business days)</li>
                <li>Reference checks (3-5 business days)</li>
                <li>Background screening (5-7 business days)</li>
                <li>Video interview (scheduled within 1 week)</li>
                <li>Final approval notification</li>
              </ol>
            </div>
            
            <p style="color: #374151; line-height: 1.6;">
              Please reply to this email with the requested documents within <strong>7 days</strong> to proceed with your application.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${applicantEmail}?subject=Buddy%20Application%20Documents" style="background: linear-gradient(135deg, #ef4444, #f97316, #22c55e); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Reply with Documents
              </a>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px;">
              Questions? Contact us at support@ghanaplatform.com<br>
              Ghana Cultural Integration Platform
            </p>
          </div>
        </div>
      `,
    });

    console.log("Buddy signup email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-buddy-signup-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
