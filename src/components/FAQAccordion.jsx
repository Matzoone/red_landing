import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question:
      "آیا سرویس‌های VPN شما محدودیت‌هایی برای استفاده از سرویس‌ها و سایت‌ها دارند؟",
    answer:
      "خیر، ما هیچ‌گونه محدودیتی در دسترسی به سایت‌ها یا سرویس‌ها اعمال نمی‌کنیم. شما می‌توانید از هر جایی به اینترنت آزاد دسترسی پیدا کرده و راحتی از سرویس‌های مسدود شده یا محدود در کشورهای مختلف استفاده کنید.",
  },
  {
    question: "آیا استفاده از VPN سرعت اینترنت را کاهش می‌دهد؟",
    answer:
      "استفاده از VPN ممکن است کمی تأثیر روی سرعت اینترنت داشته باشد، اما ما با استفاده از سرورهای پرسرعت و پروتکل‌های بهینه، کمترین افت سرعت را تضمین می‌کنیم.",
  },
  {
    question: "آیا سرویس VPN بر روی تمامی دستگاه‌ها کار می‌کند؟",
    answer:
      "بله، سرویس‌های ما از تمام دستگاه‌ها از جمله ویندوز، مک، اندروید، iOS و حتی روترها پشتیبانی می‌کنند.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-950 py-4 max-md:px-0">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white rounded-lg mx-16 my-6 p-2 overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full px-4 py-4 focus:outline-none"
          >
            <span className="text-lg text-right">{faq.question}</span>
            <span className="hidden sm:block">
              {openIndex === index ? (
                <IoIosArrowUp size={24} />
              ) : (
                <IoIosArrowDown size={24} />
              )}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-5 pb-4 text-gray-300 text-right">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
