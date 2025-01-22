import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
export const api = new WooCommerceRestApi({
    url: process.env.NEXT_PUBLIC_API_URL,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRETS,
    version: "wc/v3"
  });