import { usePageComponents } from "../hooks/usePageComponents";
import { ComponentRenderer } from "../utils/componentMapper";

const HomePage = () => {
  const { components, loading, error } = usePageComponents({
    pageName: "home",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!components.length) {
    return <div>No components found for this page.</div>;
  }

  return (
    <div className="homepage">
      {components.map((componentData, index) => (
        <ComponentRenderer key={index} data={componentData} />
      ))}
    </div>
  );
};

export default HomePage;
