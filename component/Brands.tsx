let dan = "/images/dan.png";
let addi = "/images/addidas.png";
let orca = "/images/orca.png";
let mina = "/images/mina.png";
let br = "/images/br.png";
let arq = "/images/arq.png";

export default function Brands() {
  return (
    <div className="bg-[#e6eef8]">
      <div
        className="w-[80%] mx-auto  flex justify-center box-border 
       max-md:grid max-md:grid-cols-2 max-md:w-[100%]"
      >
        <img
          className="w-[15%] max-md:w-[100%] opacity-[20%] hover:opacity-[100%]"
          src={addi}
          alt=""
        />
        <img
          className="w-[15%] max-md:w-[100%]  opacity-[20%] hover:opacity-[100%]"
          src={orca}
          alt=""
        />
        <img
          className="w-[15%] max-md:w-[100%] opacity-[20%] hover:opacity-[100%]"
          src={mina}
          alt=""
        />
        <img
          className="w-[15%] max-md:w-[100%] opacity-[20%] hover:opacity-[100%]"
          src={br}
          alt=""
        />
        <img
          className="w-[15%] max-md:w-[100%] opacity-[20%] hover:opacity-[100%]"
          src={arq}
          alt=""
        />
        <img
          className="w-[15%] max-md:w-[100%] opacity-[20%] hover:opacity-[100%]"
          src={dan}
          alt=""
        />
      </div>
    </div>
  );
}
