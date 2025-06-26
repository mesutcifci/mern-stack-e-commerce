import { HOME_PAGE_SPACINGS } from "@utils/spacings";
import { usePageComponents } from "../hooks/usePageComponents";
import { ComponentRenderer } from "../utils/componentMapper";
import clsx from "clsx";

const HomePage = () => {
  const { data, loading, error } = usePageComponents({
    pageName: "home",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.length) {
    return <div>No components found for this page.</div>;
  }

  return (
    <div
      className="homepage flex flex-col gap-y-12 lg:gap-y-24 px-[var(--left-xs)] lg:px-[var(--left-lg)] 2xl:px-[var(--left-2xl)] pr-[var(--right-xs)] lg:pr-[var(--right-lg)] 2xl:pr-[var(--right-2xl)]"
      style={
        {
          "--left-xs": `${HOME_PAGE_SPACINGS.leftXs}px`,
          "--right-xs": `${HOME_PAGE_SPACINGS.rightXs}px`,
          "--left-lg": `${HOME_PAGE_SPACINGS.leftLg}px`,
          "--right-lg": `${HOME_PAGE_SPACINGS.rightLg}px`,
          "--left-xl": `${HOME_PAGE_SPACINGS.leftXl}px`,
          "--right-xl": `${HOME_PAGE_SPACINGS.rightXl}px`,
        } as React.CSSProperties
      }
    >
      {data.map((data, index) => (
        <ComponentRenderer
          key={index}
          data={data}
          className={clsx({
            "-mx-[var(--left-xs)] lg:-mx-[var(--left-lg)] 2xl:-mx-[var(--left-2xl)]":
              data.type === "slider-component" ||
              data.type === "single-image" ||
              data.type === "product-slider",
          })}
        />
      ))}
    </div>
  );
};

export default HomePage;
