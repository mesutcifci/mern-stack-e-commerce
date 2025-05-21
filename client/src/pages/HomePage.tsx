import { usePageComponents } from "../hooks/usePageComponents";
import { ComponentRenderer } from "../utils/componentMapper";

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
    <div className="homepage">
      {data.map((data, index) => (
        <ComponentRenderer key={index} data={data} />
      ))}
    </div>
  );
};

export default HomePage;
