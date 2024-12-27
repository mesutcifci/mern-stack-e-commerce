import { useState } from "react";
import { Category } from "../types/navigation";
import chevronLeft from "@assets/images/chevron-left.svg";
import chevronRight from "@assets/images/chevron-right.svg";
import closeIcon from "@assets/images/close.svg";
import Overlay from "./Overlay";

interface HamburgerMenuProps {
  categories: Category[];
  onClose: () => void;
  isOpen: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  categories,
  onClose,
  isOpen,
}) => {
  const [path, setPath] = useState<Category[]>([]);

  // Determine current categories to display based on the path
  let currentCategories: Category[] = categories;
  if (path.length > 0) {
    const last = path[path.length - 1];
    currentCategories = last.children;
  }

  const navigateToCategory = (category: Category) => {
    if (category.children.length > 0) {
      setPath([...path, category]);
    }
  };

  const navigateBack = () => {
    setPath(path.slice(0, -1));
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClose={onClose} />
      {/* Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-[101] w-3/4 max-w-sm bg-white h-full shadow-lg overflow-y-auto transform transition-all ease-in-out duration-300 ${
          isOpen ? "translate-x-0 visible" : "-translate-x-full invisible"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          {path.length > 0 ? (
            <button onClick={navigateBack} className="text-xl">
              <img src={chevronLeft} alt="chevron-left" />
            </button>
          ) : (
            <span className="text-lg font-semibold">Menu</span>
          )}
          <button onClick={onClose} className="text-xl">
            <img src={closeIcon} alt="close" />
          </button>
        </div>

        {/* Categories */}
        <ul className="p-4">
          {currentCategories.map((category) => (
            <li
              key={category._id}
              className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-100 rounded"
              onClick={() => navigateToCategory(category)}
            >
              <span>{category.name}</span>
              {category.children.length > 0 && (
                <img src={chevronRight} alt="chevron-right" />
              )}
            </li>
          ))}
          {currentCategories.length === 0 && (
            <li className="py-2 text-center text-gray-500">No subcategories</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
