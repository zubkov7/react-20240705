import { Footer } from "../footer/component";

export const Remaunt = ({ isVisible }) => {
  const InlineComponent = () => {
    <div>something</div>;
  };

  return (
    <>
      {isVisible && <div>visible</div>}
      <Footer />
      <InlineComponent />
    </>
  );
};
