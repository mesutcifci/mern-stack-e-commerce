import { ISliderComponent } from "@custom-types/components/slider-component";
import { HeroSliderMedia } from "./HeroSliderMedia";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import arrowRight from "@assets/images/arrow-right.svg";

interface IHeroSliderProps {
  data: ISliderComponent;
}

export function HeroSlider({ data }: IHeroSliderProps) {
  if (!data || data.items?.length === 0 || !data.isActive) return null;

  console.log("data", data);

  return (
    <swiper-container
      pagination="true"
      pagination-clickable="true"
      // autoplay-delay="2500"
    >
      {data.items?.map((item, index) => (
        <swiper-slide key={item._id || index}>
          <div className="relative">
            <div className="absolute flex flex-col gap-y-4 md:gap-y-8 top-10 left-4 right-4">
              {item.title && (
                <h2
                  className={twMerge(
                    `text-[${item.textColor}] font-spaceGrotesk font-medium text-3xl md:text-4xl`
                  )}
                >
                  {item.title}
                </h2>
              )}
              {item.description && (
                <p
                  className={twMerge(
                    `text-[${item.textColor}] font-inter text-sm md:text-xl`
                  )}
                >
                  {item.description}
                </p>
              )}
              {item.buttonText && (
                <a
                  href={item.link}
                  className={twMerge(
                    clsx(
                      // item.buttonBackgroundColor === "transparent"
                      //   ? "bg-transparent"
                      //   : `bg-[${item.buttonBackgroundColor}]`,
                      `text-[${item.buttonTextColor}]`,
                      `flex items-center w-max border-b border-b-[${item.buttonTextColor}]`
                    )
                  )}
                >
                  <span
                    className={twMerge(
                      "text-sm md:text-xl font-spaceGrotesk font-medium"
                    )}
                  >
                    {item.buttonText}
                  </span>
                  <img src={arrowRight} alt="" />
                </a>
              )}
            </div>
            <HeroSliderMedia item={item} />
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
