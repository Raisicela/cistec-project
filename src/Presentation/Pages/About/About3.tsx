const items: Item[] = [
  {
    title: "+",
    description: "Clientes satistechos",
  },
  {
    title: "+",
    description: "Expertos en construcción",
  },
  {
    title: "+20",
    description: "Años en el mercado Ecuatoriano",
  },
];

const About3 = () => {
  return (
    <div className="flex flex-col bg-[#D9D9D9] justify-center md:flex-row">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
};

export default About3;

type Item = {
  title: string;
  description: string;
};
export const Item = (props: Item) => {
  return (
    <div className="flex flex-col my-4 md:w-1/3">
      <h5 className="poppins-bold text-3xl text-center md:text-center">
        {props.title}
      </h5>
      <p className="poppins-regular text-center mt-4">{props.description}</p>
    </div>
  );
};
