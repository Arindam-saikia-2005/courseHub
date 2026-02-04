import Razorpay from "razorpay";

export function createRazorpay() {
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error(
      `Missing Razorpay credentials: RAZORPAY_KEY_ID=${keyId ? "present" : "missing"}, RAZORPAY_KEY_SECRET=${keySecret ? "present" : "missing"}`
    );
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
}

export default createRazorpay;
