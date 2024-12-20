// import { payment_options } from "../../assets/cn_data/PaymentData";
import FormattedText from "../FormattedText";
import HeadLiner from "../HeadLiner";
import ImageBlock from "../ImageBlock";
import NavBar from "../NavBar";
import { useState, useEffect } from "react";

interface Props {
  language: string;
}
const PaymentPage = ({ language }: Props) => {
  const [data, setData] = useState<{
    payment_options: any;
    image_block?: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import(
          `../../assets/${language}_data/PaymentData.tsx`
        );
        setData(module);
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);
  return (
    <div>
      <div className="sticky-top">
        <HeadLiner />
        <NavBar Active={["", "", "", "", "", "active"]} language={language} />
      </div>

      <ImageBlock
        image={data?.image_block.image}
        title={data?.image_block.title}
        text={data?.image_block.text}
        color={data?.image_block.color}
      />
      {/* Payment 1*/}
      <div style={{ margin: "5% 5% 5% 5%" }}>
        <div className="accordion custom-accordian" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + data?.payment_options[0].id}
                aria-expanded="true"
                aria-controls={"collapse" + data?.payment_options[0].id}
              >
                {data?.payment_options[0].payment_method}
              </button>
            </h2>
            <div
              id={"collapse" + data?.payment_options[0].id}
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div style={{ margin: "3%" }}>
                <FormattedText
                  content={data?.payment_options[0].content}
                  content_id="0"
                />
              </div>
            </div>
          </div>
          {/* Payment 2*/}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + data?.payment_options[1].id}
                aria-expanded="true"
                aria-controls={"collapse" + data?.payment_options[1].id}
              >
                {data?.payment_options[1].payment_method}
              </button>
            </h2>
            <div
              id={"collapse" + data?.payment_options[1].id}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div style={{ margin: "3%" }}>
                <FormattedText
                  content={data?.payment_options[1].content}
                  content_id={data?.payment_options[1].id}
                />
              </div>
            </div>
          </div>
          {/* Payment 3*/}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapse" + data?.payment_options[2].id}
                aria-expanded="true"
                aria-controls={"collapse" + data?.payment_options[2].id}
              >
                {data?.payment_options[2].payment_method}
              </button>
            </h2>
            <div
              id={"collapse" + data?.payment_options[2].id}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div style={{ margin: "3%" }}>
                <FormattedText
                  content={data?.payment_options[2].content}
                  content_id={data?.payment_options[2].id}
                />
                <br></br>
                <a href="https://secure.lawpay.com/pages/mtlawllc/trust">
                  <img
                    style={{ border: "solid 1px black" }}
                    src="/assets/PaymentPage/LawPayButton.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
