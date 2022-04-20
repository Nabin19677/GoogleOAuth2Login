import { OAuth2Client } from "google-auth-library";
console.log(process.env.GOOGLE_CLIENT_ID);
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const userGooglePayload = async (token) => {
  let ticket;
  try {
    console.log(googleClient._clientId);
    ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
  } catch (e) {
    console.log(e.message);
    throw new Error("Unable to verify google account.");
  }
  return ticket.getPayload();
};
