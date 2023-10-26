import { CountryData } from "./SeatchAndDisplay";

const CountryDetails = ({ data }: Props) => {
  //   if (!) return null;
  //   console.log(data);

  console.log(data);
  console.log(data.currencies);
  console.log(typeof data.currencies);

  return (
    <div>
      <h1>Details</h1>
      <p>Official name: </p>
      <p>{data?.name.official}</p>
      <p>Currency name and symbol:</p>
      <p></p>
      <p>Flag</p>
      <img src={data.flags.png || data.flags.svg} alt={data.flags.alt} />
      <p>Coat of arms</p>
      <img
        src={data.coatOfArms.png || data.coatOfArms.svg}
        alt={"Coat of arms"}
      />
      <p>What side of the road they drive on</p>
      <p>{data.car.side}</p>
    </div>
  );
};

export default CountryDetails;

interface Props {
  data: CountryData;
}
