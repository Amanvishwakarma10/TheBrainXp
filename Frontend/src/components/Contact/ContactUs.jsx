import Navbar from "../Navbar/Navbar";
import ContactForm from "./ContactForm";
import GoogleMapComponent from "./GoogleMap";

const ContactUs = () => {
  return (
    <div className="bg-light overflow-hidden relative">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mb-6"></h1>
      <div className=" justify-center mt-10">
        <ContactForm />
        <div className="container justify-center mt-10">
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
