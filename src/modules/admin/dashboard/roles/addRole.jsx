import { useContext, useState } from "react";
import { RoleContext } from "../../../../contexts/RoleContext";
import { useNavigate } from "react-router-dom";

const AdminAddRolePage = () => {
  const { createRole, loading } = useContext(RoleContext);
  const [formData, setFormData] = useState({
    name: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigation = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let errors = { ...formErrors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          errors.name = "Please input role name!";
        } else {
          delete errors.email;
        }
        break;
    }

    setFormErrors(errors);
  };

  const handleFormValidation = (data, name = null) => {
    const errors = {};

    if (!data.name) {
      errors.name = "Please input role name!";
    }

    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = handleFormValidation(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      let tempData = {
        name: formData.name,
      };

      await createRole(tempData);

      navigation("/admin/roles");
    }
  };

  return (
    <div className="pb-40">
      <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg mb-6">
        Create Role
      </h1>
      <div className="bg-white w-full shadow-lg sm:p-9 p-6 rounded-lg">
        <form onSubmit={handleFormSubmit}>
          <div className="sm:space-y-8 space-y-4">
            <div className="form-group">
              <label
                for="email"
                className="text-black font-normal sm:text-base text-sm sm:mb-2 mb-1 inline-block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border-[1px] border-white rounded-md placeholder:text-primaryColor text-black bg-white shadow-md text-sm py-3 px-4 focus:border-primaryColor outline-none"
                placeholder="Name..."
                onChange={handleInputChange}
              />
              {formErrors.name && (
                <span className="text-red-600 text-sm mt-1 inline-block">
                  {formErrors.name}
                </span>
              )}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="text-white bg-primaryColor hover:bg-primaryColor focus:ring-4 focus:outline-none focus:ring-primaryColor font-medium rounded-lg text-xs px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-green dark:hover:bg-green dark:focus:ring-primaryColor"
              >
                {!loading && "Submit"}
                {loading && (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 group-hover:text-white fill-primaryColor"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminAddRolePage;