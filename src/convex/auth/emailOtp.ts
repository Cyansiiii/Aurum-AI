import { Email } from "@convex-dev/auth/providers/Email";

export const emailOtp = Email({
  id: "email-otp",
  maxAge: 60 * 15, // 15 minutes
  async generateVerificationToken() {
    const array = new Uint8Array(6);
    crypto.getRandomValues(array);
    // Generate a 6-digit number
    return Array.from(array, (byte) => (byte % 10).toString()).join("");
  },
  async sendVerificationRequest({ identifier: email, token }) {
    try {
      const response = await fetch("https://email.vly.ai/send_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "vlytothemoon2025",
        },
        body: JSON.stringify({
          to: email,
          otp: token,
          appName: process.env.VLY_APP_NAME || "a vly.ai application",
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to send OTP: ${response.status} ${text}`);
      }
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },
});