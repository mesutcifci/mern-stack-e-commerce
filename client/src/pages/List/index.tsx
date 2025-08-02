import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { fetchApi } from "@api/api";
import { ProductData } from "@custom-types/product";

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
      .then((res: { data: never }) => {
        setProducts(res.data || []);
      })
      .catch((err: { message: never }) => {
        setError(err.message || "Failed to fetch products");
      })
      .finally(() => setLoading(false));
  }, [category, location.search]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Products in category: {category}</h2>
      {products.length === 0 ? <div>No products found.</div> : <ul></ul>}
    </div>
  );
}
