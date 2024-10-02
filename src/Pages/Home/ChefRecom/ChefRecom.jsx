import ChefCard from "../../../Components/ChefCard/ChefCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import chef1 from "../../../assets/home/slide5.jpg";

const ChefRecom = () => {
  return (
    <section className="mb-20">
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="grid grid-cols-3 gap-10">
        <ChefCard
          chef={chef1}
          title={"Caeser Salad"}
          shotDesc="lorem ipsome amet dolar"
        />
        <ChefCard
          chef={chef1}
          title={"Caeser Salad"}
          shotDesc="lorem ipsome amet dolar"
        />
        <ChefCard
          chef={chef1}
          title={"Caeser Salad"}
          shotDesc="lorem ipsome amet dolar"
        />
      </div>
    </section>
  );
};

export default ChefRecom;
