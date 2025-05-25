import { IinfoBand } from "@custom-types/components/info-band";
import { twMerge } from "tailwind-merge";

interface IinfoBandProps {
  data: IinfoBand;
}

export function InfoBand({ data }: IinfoBandProps) {
  if (!data || !data.items || !data.isActive) return null;

  return (
    <div className="w-full h-10 px-4 lg:px-8 2xl:px-14">
      <swiper-container autoplay-delay={data.autoplay ? "2500" : undefined}>
        {data.items.map((item) => (
          <swiper-slide key={item.text}>
            <div
              className={twMerge(
                `bg-[${item.backgroundColor}] flex items-center justify-center text-[${item.textColor}]`,
                "font-spaceGrotesk font-medium text-base",
                "py-2"
              )}
            >
              {item.link ? (
                <a href={item.link}>{item.text}</a>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
