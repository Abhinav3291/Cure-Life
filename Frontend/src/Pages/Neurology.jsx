
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const Neurology = () => {
  return (
    <>
      <Hero
        title={"Neurology || Thinking About Brain"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default Neurology;
