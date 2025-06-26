import { useEffect, useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Data
import { fetchApi } from "@api/api";
import { Category } from "@custom-types/navigation";

// Images
import bag from "@assets/images/bag.svg";
import hamburger from "@assets/images/hamburger.svg";
import logo from "@assets/images/logo.svg";
import search from "@assets/images/search.svg";

// Components
import HamburgerMenu from "@components/HamburgerMenu";
import { AdvancedImage } from "@cloudinary/react";
import { Resize } from "@cloudinary/url-gen/actions";
import { cld } from "@utils/cloudinary";
import { HOME_PAGE_SPACINGS } from "@utils/spacings";
import { URL_PREFIXES } from "@utils/urlPrefixes";

interface NavigationProps {
  isScrolled: boolean;
}

export function Navigation({ isScrolled }: NavigationProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  // const [extraItems, setExtraItems] = useState<any[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetchApi("/navigation/navigation-menu");

        if (response.data.categories?.length > 0) {
          setCategories(response.data.categories);
        }

        // if (response.data.extraItems?.length > 0) {
        //   setExtraItems(data.data.extraItems);
        // }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchNavigation();
  }, []);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  return (
    <nav
      className={twMerge(
        clsx("w-full relative", {
          "transition-all duration-300": isScrolled && !activeCategory,
          "bg-white": isScrolled || activeCategory,
        })
      )}
    >
      <div
        className={twMerge(
          "flex justify-between items-center py-3 lg:pb-0 lg:items-stretch px-[var(--left-xs)] lg:px-[var(--left-lg)] 2xl:px-[var(--left-2xl)] pr-[var(--right-xs)] lg:pr-[var(--right-lg)] 2xl:pr-[var(--right-2xl)]"
        )}
        style={
          {
            "--left-xs": `${HOME_PAGE_SPACINGS.leftXs}px`,
            "--left-lg": `${HOME_PAGE_SPACINGS.leftLg}px`,
            "--left-xl": `${HOME_PAGE_SPACINGS.leftXl}px`,
            "--right-xs": `${HOME_PAGE_SPACINGS.rightXs}px`,
            "--right-lg": `${HOME_PAGE_SPACINGS.rightLg}px`,
            "--right-xl": `${HOME_PAGE_SPACINGS.rightXl}px`,
          } as React.CSSProperties
        }
      >
        <div className={twMerge("flex items-center gap-x-3 lg:pb-4")}>
          <img
            src={hamburger}
            width={26}
            height={26}
            className={twMerge("cursor-pointer lg:hidden")}
            onClick={openMenu}
          />
          <a href="/">
            <img
              src={logo}
              width={114}
              height={22}
              className={twMerge(
                "lg:w-[9.6875rem] lg:h-[1.875rem] cursor-pointer"
              )}
            />
          </a>
        </div>

        {/* Categories */}
        <div className={twMerge("hidden lg:flex items-stretch")}>
          {categories.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => handleCategoryHover(category.id)}
              onMouseLeave={handleCategoryLeave}
              className={twMerge("pr-6 last:pr-0 pb-2")}
            >
              <a
                href={`/${URL_PREFIXES.category}/${category.slug}`}
                className={twMerge(
                  clsx("cursor-pointer text-xl xl:text-2xl text-mesblack", {
                    "text-lifblue": activeCategory === category.id,
                  })
                )}
              >
                {category.name}
              </a>

              {/* Mega Menu */}
              {activeCategory === category.id && (
                <div
                  className={twMerge(
                    "absolute left-0 right-0 shadow-lg p-6 z-mega-menu bg-white"
                  )}
                >
                  <div
                    className={twMerge(
                      "flex justify-between max-w-screen-xl mx-auto pt-6"
                    )}
                  >
                    {/* Categories List */}
                    <div
                      className={twMerge(
                        "flex gap-y-6 gap-x-[5.5rem] flex-wrap xl:self-center xl:mx-auto"
                      )}
                    >
                      {category.children?.map((subCategory) => (
                        <div
                          key={subCategory.id}
                          className={twMerge("gap-y-2 flex flex-col")}
                        >
                          <a
                            href={`/${URL_PREFIXES.category}/${subCategory.slug}`}
                            className={twMerge(
                              "text-mesblack text-base xl:text-lg font-medium hover:text-lifblue"
                            )}
                          >
                            {subCategory.name}
                          </a>
                          <ul className={twMerge("flex flex-col gap-y-2")}>
                            {subCategory.children?.map((item) => (
                              <li key={item.id}>
                                <a
                                  href={`/${URL_PREFIXES.category}/${item.slug}`}
                                  className={twMerge(
                                    "text-mesblack hover:text-lifblue font-normal text-sm xl:text-base"
                                  )}
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* Images */}
                    {category.images?.length > 0 && (
                      <div
                        className={twMerge("flex gap-x-6 shrink-0 self-center")}
                      >
                        {category.images?.map((image) => (
                          <a
                            key={image.id}
                            href={image.link}
                            className={twMerge("block")}
                          >
                            <AdvancedImage
                              cldImg={cld
                                .image(image.url)
                                .format("auto")
                                .resize(Resize.fill(500, 750))}
                              width={250}
                              height={375}
                            />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={twMerge(
            "flex items-center gap-x-4 lg:w-[9.6875rem] lg:justify-end lg:pb-4"
          )}
        >
          <img
            src={search}
            width={26}
            height={26}
            className={twMerge("cursor-pointer")}
          />
          <div className={twMerge("flex items-center")}>
            <img
              src={bag}
              width={26}
              height={26}
              className={twMerge("cursor-pointer")}
            />
            <span
              className={twMerge(
                "flex items-center justify-center p-1 min-w-[1.25rem] min-h-[1.25rem] max-w-8 max-h-8 text-xs leading-[.625rem] font-inter font-bold text-white bg-black rounded-full aspect-square cursor-pointer"
              )}
            >
              2
            </span>
          </div>
        </div>
      </div>
      <HamburgerMenu
        categories={categories}
        onClose={closeMenu}
        isOpen={isMenuOpen}
      />
    </nav>
  );
}
