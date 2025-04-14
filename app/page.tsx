import Blogs from "@/component/Blogs";
import Brands from "@/component/Brands";
import Creative from "@/component/Creative";
import FolderSlides from "@/component/FolderSlides";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Navbar from "@/component/Navbar";
import Solutions from "@/component/Solutions";
import Stat from "@/component/Stat";
import Subscribe from "@/component/Subscribe";
import Testimonial from "@/component/Testimonial";
import Who from "@/component/Who";

export default function Home() {
  return (
    <div className=" bg-[white]  ">
      <Navbar />
      <Hero />
      <Creative />
      <Stat />
      <Solutions />
      <FolderSlides />
      <Subscribe />
      <Testimonial />
      <Who />
      <Brands />
      <Blogs />
      <Footer />
    </div>
  );
}
