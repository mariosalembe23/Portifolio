/* eslint-disable react/prop-types */
import "../App.css";
import { useRef, useEffect } from "react";

interface CardComponentProps {
  pathIcon: string;
  title: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ pathIcon, title }) => {
  return (
    <div className="py-3 justify-center gap-4 px-6 w-52 flex items-center">
      <img src={pathIcon} className="w-9" alt="icon_web_skills" />
      <h4 className="text-xl font-medium text-white">{title}</h4>
    </div>
  );
};

interface Card {
  title: string;
  backgroundColor: string;
  pathIcon: string;
}

interface InfiniteScrollProps {
  cardData: Card[];
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ cardData }) => {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      const nextSibling = ul.nextSibling;
      if (nextSibling && nextSibling instanceof Element) {
        nextSibling.setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  return (
    <div className="w-full large:max-w-[98rem] mt-5 max-w-7xl mx-auto px-0 paisagem-tablet:px-6 pt-7">
      <div className="text-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul
            ref={logosRef}
            className="flex items-center justify-center md:justify-start [&_li]:mx-3 [&_img]:max-w-none animate-infinite-scroll"
          >
            {cardData.map((card, index) => (
              <li key={index}>
                <CardComponent title={card.title} pathIcon={card.pathIcon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
