import { IinfoBand } from "@custom-types/components/info-band";
import { twMerge } from "tailwind-merge";

interface IinfoBandProps {
  data: IinfoBand;
}

export function InfoBand({ data }: IinfoBandProps) {
  if (!data || !data.items || !data.isActive) return null;

  return (
    <div className="w-full h-10">
      <swiper-container autoplay-delay={data.autoplay ? "2500" : undefined}>
        {data.items.map((item) => (
          <swiper-slide key={item.text}>
            <div
              style={
                {
                  "--background-color": item.backgroundColor,
                  "--text-color": item.textColor,
                } as React.CSSProperties
              }
              className={twMerge(
                `bg-[var(--background-color)] flex items-center justify-center text-[var(--text-color)]`,
                "font-spaceGrotesk font-medium text-base",
                "py-2 px-4 lg:px-8 2xl:px-14 w-full"
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
