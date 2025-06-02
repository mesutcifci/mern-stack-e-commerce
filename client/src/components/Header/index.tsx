import { useEffect, useState } from "react";
import { Navigation } from "@components/Navigation";
import { InfoBand } from "@components/InfoBand";
import { useComponentData } from "@hooks/useComponentData";
import { InfoBandData } from "@custom-types/components/info-band";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Fetch InfoBand data
  const { data: infoBandData } = useComponentData<InfoBandData>({
    endpoint: "/components/info-band",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-header">
      {infoBandData && isScrolled && <InfoBand data={infoBandData} />}
      <Navigation isScrolled={isScrolled} />
    </header>
  );
}
