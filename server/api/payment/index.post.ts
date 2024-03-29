import stripe from "./stripe";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body) {
    return { error: "body are required" };
  }

  try {
    const YOUR_DOMAIN = getRequestURL(event).origin;
    const session = await stripe.checkout.sessions.create({
      line_items: body.line_items,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/cart?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cart?canceled=true`,
    });

    return session;
  } catch (error) {
    console.log("ошибка", error);
    // @ts-ignore
    sendError(event, error);
  }
});
