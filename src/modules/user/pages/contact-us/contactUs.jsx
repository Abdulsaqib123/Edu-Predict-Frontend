import { useContext, useState } from "react";
import { ContactContext } from "../../../../contexts/ContactContext";
import { validate } from "email-validator";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const user_id = localStorage.getItem("user_id");
  const { addContact } = useContext(ContactContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let errors = { ...formErrors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          errors.name = "Please input your name!";
        } else {
          delete errors.name;
        }
        break;
      case "email":
        if (!value.trim()) {
          errors.email = "Please input your email!";
        } else if (!validate(value)) {
          errors.email = "Please input your valid email address!";
        } else {
          delete errors.email;
        }
        break;
      case "message":
        if (!value.trim()) {
          errors.message = "Please input your message!";
        } else {
          delete errors.message;
        }
        break;

      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleFormValidation = (data) => {
    const errors = {};

    if (!data.name) {
      errors.name = "Please input your name!";
    }

    if (!data.email) {
      errors.email = "Please input your email!";
    } else if (!validate(data.email)) {
      errors.email = "Please input your valid email address!";
    }

    if (!data.message) {
      errors.message = "Please input your message!";
    }

    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = handleFormValidation(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      let tempData = {
        user_id: user_id ? user_id : "unknown",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await addContact(tempData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="md:pt-44 sm:pt-44 pt-36 bg-gray-100 md:pb-36 pb-28 px-5">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-center text-black font-bold md:text-7xl sm:text-5xl text-3xl md:leading-[84px] sm:leading-[52px] leading-[40px] mx-auto sm:mb-4 mb-3">
                Contact Us
              </h2>
              <p className="text-gray-800 sm:text-base text-sm mx-auto max-w-2xl font-normal sm:mb-9 mb-5">
                Share your thoughts to help us improve and serve you better.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:py-28 py-20">
        <div className="max-w-7xl w-full mx-auto">
          <h2 class="text-4xl font-bold text-gray-800 text-center sm:mb-10 mb-6">
            Send Your Feedback
          </h2>
          <form
            className="w-full mx-auto bg-white p-8 rounded-lg shadow-lg"
            onSubmit={handleFormSubmit}
          >
            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.name}
                </span>
              )}
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
              {formErrors.email && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.email}
                </span>
              )}
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={handleInputChange}
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor"
              >
                {formData.message}
              </textarea>
              {formErrors.message && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primaryColor text-white py-3 rounded-lg hover:bg-primaryColor transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
