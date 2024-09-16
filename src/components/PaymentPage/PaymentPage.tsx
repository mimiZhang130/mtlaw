import HeadLiner from "../HeadLiner";
import ImageBlock from "../ImageBlock";
import NavBar from "../NavBar";
import { useState, useEffect } from "react";

interface Props {
  language: string;
}
const PaymentPage = ({ language }: Props) => {
  const [data, setData] = useState<{
    home_introduction: any;
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
    </div>
  );
};

export default PaymentPage;
