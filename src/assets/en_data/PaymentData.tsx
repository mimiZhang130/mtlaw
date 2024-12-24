export const image_block = {
  image: "/assets/PaymentPage/PaymentTitle.jpg",
  title: "A Premier Full-Service Law Firm",
  text: `Our main office is located in Lexington, Massachusetts, and we have additional locations in New York, California and China. We look forward to learning about your needs so we can help you achieve your goals. To discuss your case and speak with our knowledgeable staff, you can contact our firm today.`,
  color: "green",
};

export const payment_options = [
  {
    id: 0,
    payment_method: "Payment by Check",
    content: `<b>Please make checks payable to:</b>
    MT Law LLC
    <b>Our mailing address is:</b>
    Attn: The person who is taking care of your case
    430 Bedford Street, Suite 200
    Lexington, MA 02420
    (800) 345-1899`,
    side: "left",
  },
  {
    id: 1,
    payment_method: "Payment by Wire Transfer",
    content: `<b>Bank Name</b>: East West Bank
    <b>Bank Address</b>: 68 Harrison Ave, Boston MA 02111 
    <b>Routing Number</b>: 322070381
    <b>Swift Code</b>: EWBKUS66
    <b>Account Number</b>: 8659004769
    <b>Account Name</b>: MT Law LLC
    <b>Beneficiary Name</b>: MT Law LLC
    <b>Beneficiary address</b>: 430 Bedford St, STE 200, Lexington, MA 02420-1548`,
    side: "right",
  },
  {
    id: 2,
    payment_method: "Payment by Online Methods",
    content: `<b>Zelle:</b>
    Account: tian@mtlawllc.com
    <b>PayPal:</b>
    Account: tax@mtlawllc.com
    Service Fee: 
    <b>LawPay:</b> 
    If you choose this option, please follow the instructions as provided below. Please note that there will be an extra 4% fee to be charged through this payment option.
    `,
    side: "left",
  },
];
