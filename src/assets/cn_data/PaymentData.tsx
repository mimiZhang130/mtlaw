export const image_block = {
  image: "/assets/PaymentPage/PaymentTitle.jpg",
  title: "A Premier Full-Service Law Firm",
  text: `Our main office is located in Lexington, Massachusetts, and we have additional locations in New York, California and China. We look forward to learning about your needs so we can help you achieve your goals. To discuss your case and speak with our knowledgeable staff, you can contact our firm today.`,
  color: "green",
};

export const payment_options = [
  {
    id: 0,
    payment_method: "支票",
    content: `<b>支票抬头请填写:</b>
    MT Law LLC
    <b>邮寄地址如下:</b>
    请注明负责您案件的人员姓名
    430 Bedford Street, Suite 200
    Lexington, MA 02420
    (800)345-1899`,
    side: "left",
  },
  {
    id: 1,
    payment_method: "电汇",
    content: `<b>银行名称</b>: 华美银行
    <b>银行地址</b>: 68 Harrison Ave, Boston MA 02111 
    <b>银行路由号</b>: 322070381
    <b>Swift代码</b>: EWBKUS66
    <b>银行账号</b>: 8659004769
    <b>账户名</b>: MT Law LLC
    <b>收款人</b>: MT Law LLC
    <b>收款人地址</b>: 430 Bedford St, STE 200, Lexington, MA 02420-1548`,
    side: "right",
  },
  {
    id: 2,
    payment_method: "Payment by LawPay",
    content: `If you choose this option, please follow the instructions as provided below. Please note that there will be an extra 4% fee to be charged through this payment option.`,
    side: "left",
  },
];
