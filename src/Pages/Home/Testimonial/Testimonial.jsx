import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
const Testimonial = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"Testimonial"}
        subHeading={"What Our Client Says"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-24 flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={3} readOnly />

              <p className="py-6">{review.details}</p>
              <h3 className="text-2xl text-orange-600">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
