let test2 = "/images/test2.jpg";

export default function Testimonial3() {
  return (
    <div className="w-[70%] mx-auto py-[50px] max-md:w-[100%]">
      <div className="w-fit h-fit  mx-auto">
        <img className="mx-auto  rounded-full" src={test2} alt="" />
      </div>

      <div className="text-center my-[50px]">
        <p className="text-[22px] text-[#080337] max-md:text-[17px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          consectetur, voluptatem aspernatur vitae explicabo necessitatibus est
          magnam vero delectus quo quasi incidunt doloremque repellat velit,
          porro architecto reiciendis corporis cumque!
        </p>
      </div>

      <div className="text-center">
        <p className="text-[19px] text-[#080337] font-bold">Paul Freeman</p>
        <p className="text-[16px] text-gray-500">Expert</p>
      </div>
    </div>
  );
}
