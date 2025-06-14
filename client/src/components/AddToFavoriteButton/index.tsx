import { HeartEmpty } from "@icons/HeartEmpty";
import { HeartFilled } from "@icons/HeartFilled";

export default function AddToFavoriteButton({
  isFavorite,
  toggleFavorite,
}: {
  isFavorite: boolean;
  toggleFavorite: () => void;
}) {
  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? <HeartFilled /> : <HeartEmpty />}
    </button>
  );
}
