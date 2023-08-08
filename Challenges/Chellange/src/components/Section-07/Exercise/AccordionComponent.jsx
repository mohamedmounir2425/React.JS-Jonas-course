import { useState } from "react";
import "./Accordion.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export const AccordionComponent = () => {
  const [itemIndex, setItemIndex] = useState([])
  const handleOpen = (id) => {
    setItemIndex(itemIndex.includes(id) ? itemIndex.filter(index => index != id) : [...itemIndex,id])
  }
  return (
    <div className="body">
      <div className="accordion">
        {faqs.map((item,index) => {
          return (
            <div onClick={() => handleOpen(index)} className={`item ${itemIndex.includes(index) ? 'open':''}`}>
              <p className={`number `}>{index <= 9 ? `0${index + 1}` : index}</p>
              <p className={`title `}>{ item.title}</p>
              <p className={`icon `}>{itemIndex.includes(index)? '-' : '+'}</p>
              {itemIndex.includes(index) ? <div className="content-box">
                {item.text}
              </div> : ''}
            </div>
          )
        })}
      </div>
    </div>
  );
};
