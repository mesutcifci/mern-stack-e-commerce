import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { fetchApi } from "@api/api";
import { ProductData } from "@custom-types/product";
import ProductCard from "@components/ProductCard";

function getQueryString(search: string) {
  return search ? search : "";
}

export default function List() {
  const { category } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;
    setLoading(true);
    setError(null);
    const queryString = getQueryString(location.search);
    fetchApi(`/products/category/${category}/${queryString}`)
      .then((res: { data: { products: ProductData[] } }) => {
        setProducts(res.data.products || []);
      })
      .catch((err: { message: string }) => {
        setError(err.message || "Failed to fetch products");
      })
      .finally(() => setLoading(false));
  }, [category, location.search]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.length === 0 ? (
        <div>No products found.</div>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}
