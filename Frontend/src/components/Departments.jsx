import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
      link: "/neurology",  
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {departmentsArray.map((department, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{department.name}</div>
                {department.name === "Neurology" ? (
                  <NavLink to={department.link}>
                    <img src={department.imageUrl} alt={department.name} />
                  </NavLink>
                ) : (
                  <img src={department.imageUrl} alt={department.name} />
                )}
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
