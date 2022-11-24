import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const ProductLogo = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        id="noun_cloth_2129414"
        d="M436.271,456.879a1.263,1.263,0,0,1-1.22-.814l-3.062-8.038H418.527A2.527,2.527,0,0,1,416,445.5V426.529A2.528,2.528,0,0,1,418.532,424h17.7a1.264,1.264,0,0,1,1.144.726l3.823,8.126h15.267A2.527,2.527,0,0,1,459,435.381V454.35a2.528,2.528,0,0,1-2.532,2.529Zm-.84-30.35h-16.9s0,6.323,0,18.969h25.828Zm6.961,8.852,5.1,10.842a1.265,1.265,0,0,1-.312,1.49L439.6,454.35h16.864s0-6.323,0-18.969Zm-5.624,18.085,6.216-5.439H434.7Z"
        transform="translate(-416 -424)"
      />
    </SvgIcon>
  );
};

export default ProductLogo;