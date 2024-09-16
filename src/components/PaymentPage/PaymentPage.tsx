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
      <div style={{ display: "grid" }}>
        {data?.payment_options.map((payment: any) => (
          <div className={"payment-card-" + payment.side}>
            <h1 style={{ color: "var(--primary-color)" }}>
              {payment.payment_method}
            </h1>
            <FormattedText content={payment.content} content_id={payment.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPage;
