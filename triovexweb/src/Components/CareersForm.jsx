import React, { useEffect, useState } from "react";
import { UploadCloud } from "lucide-react";
const baseURL = import.meta.env.VITE_BASE_URL;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CareersForm() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const [expandedJobId, setExpandedJobId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    location: "",
    resume: null,
    portfolio: null,
    message: "",
  });
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    // Detect dark mode dynamically like Footer
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const response = await fetch(`${baseURL}/api/vacancy/all`);
        const data = await response.json();
        if (data.success) setVacancies(data.vacancies);
      } catch (err) {
        console.error("Error fetching vacancies:", err);
      }
    };
    fetchVacancies();
  }, []);

  const isFormValid =
    formData.firstName &&
    formData.email &&
    formData.phone &&
    formData.position &&
    formData.experience &&
    formData.location &&
    formData.resume;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) data.append(key, formData[key]);
    });

    const toastId = toast.loading("Uploading your application...", {
      theme: isDarkMode ? "dark" : "light",
    });

    try {
      const response = await fetch(`${baseURL}/api/career/submit`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast.update(toastId, {
          render: "Application submitted successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
          theme: isDarkMode ? "dark" : "light",
        });

        setFormData({
          firstName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          location: "",
          resume: null,
          portfolio: null,
          message: "",
        });
      } else {
        toast.update(toastId, {
          render: "❌ Failed to submit the form.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
          theme: isDarkMode ? "dark" : "light",
        });
      }
    } catch (err) {
      console.error(err);
      toast.update(toastId, {
        render: "❌ An error occurred while submitting.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
        theme: isDarkMode ? "dark" : "light",
      });
    }
  };

  const scrollToForm = () => {
    document.querySelector("form")?.scrollIntoView({ behavior: "smooth" });
  };

  // Inline styles for main section
  const sectionStyles = {
    backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
    transition: "background-color 0.5s ease",
  };

  return (
    <section style={sectionStyles} className="py-12 px-4 transition-colors duration-500">
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl font-extrabold text-center mb-12 tracking-tight ${
                isDarkMode ? "text-white" : "text-[#313719]"
              }`}
            >
              Career Opportunities at{" "}
              <span
                className={`underline underline-offset-4 ${
                  isDarkMode ? "decoration-white" : "decoration-[#313719]"
                }`}
              >
                Triovex
              </span>
            </h2>

            {/* Vacancy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {vacancies.map((job) => {
                const isExpanded = expandedJobId === job._id;
                const visibleSkills = isExpanded ? job.skills : job.skills?.slice(0, 3);

                return (
                  <div
                    key={job._id}
                    className={`rounded-xl shadow-md border hover:shadow-lg transition-transform hover:scale-[1.01] overflow-hidden ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className={`h-1 ${isDarkMode ? "bg-[#22c55e]" : "bg-[#313719]"}`} />
                    <div className="p-6 space-y-5">
                      <h2
                        className={`text-center text-2xl font-semibold tracking-wide ${
                          isDarkMode ? "text-white" : "text-[#313719]"
                        }`}
                      >
                        {job.jobTitle}
                      </h2>

                      <div className={`text-sm space-y-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        <div className="flex">
                          <span className={`w-28 font-medium ${isDarkMode ? "text-white" : "text-[#313719]"}`}>
                            Location:
                          </span>
                          <span className="flex-1">{job.location}</span>
                        </div>
                        <div className="flex">
                          <span className={`w-28 font-medium ${isDarkMode ? "text-white" : "text-[#313719]"}`}>
                            Experience:
                          </span>
                          <span className="flex-1">{job.experience}+ Years</span>
                        </div>
                      </div>

                      <div>
                        <h4 className={`font-medium mb-2 text-sm ${isDarkMode ? "text-white" : "text-[#313719]"}`}>
                          Required Skills
                        </h4>
                        <ul className={`text-sm space-y-1 ml-1 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                          {visibleSkills?.map((skill, index) => (
                            <li key={index} className="list-disc list-inside">
                              {skill}
                            </li>
                          ))}
                        </ul>
                        {job.skills?.length > 3 && (
                          <button
                            onClick={() => setExpandedJobId(isExpanded ? null : job._id)}
                            className={`text-xs mt-2 underline transition ${
                              isDarkMode
                                ? "text-white hover:text-gray-300"
                                : "text-[#313719] hover:text-[#2a3016]"
                            }`}
                          >
                            {isExpanded ? "Show Less" : "Show More"}
                          </button>
                        )}
                      </div>

                      <button
                        className={`w-full mt-4 py-2 rounded-md text-white transition ${
                          isDarkMode ? "bg-[#22c55e] hover:bg-emerald-600" : "bg-[#313719] hover:bg-[#2a3016]"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, position: job.jobTitle })) &&
                          scrollToForm()
                        }
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg transition-colors duration-500 ${
            isDarkMode ? "bg-gray-800" : "bg-[#F8F8F8]"
          }`}
        >
          {/* Inputs */}
          {[
            { name: "firstName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
            { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
            { name: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
            { name: "position", label: "Current Position", type: "text", placeholder: "Enter your current role" },
            { name: "experience", label: "Years of Experience", type: "text", placeholder: "e.g. 3 years" },
            { name: "location", label: "Preferred Location", type: "text", placeholder: "Enter preferred location" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={`px-4 py-2 rounded-full w-full transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 text-white focus:ring-[#BB86FC]"
                    : "bg-[#E2EAC6] text-black focus:ring-[#313719]"
                }`}
              />
            </div>
          ))}

          {/* Resume & Portfolio Uploads */}
          {["resume", "portfolio"].map((fileField) => (
            <div key={fileField} className="md:col-span-2 flex flex-col gap-2">
              <label className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                {fileField === "resume" ? "Upload Resume" : "Upload Portfolio (Optional)"}
              </label>
              <div
                className={`rounded-md p-6 flex flex-col items-center justify-center relative transition-colors duration-300 ${
                  isDarkMode ? "bg-gray-700 text-gray-300" : "bg-[#E2EAC6] text-gray-500"
                }`}
              >
                <UploadCloud className="w-10 h-10 mb-2" />
                <p className="text-sm mb-2">Click to upload</p>
                <input
                  type="file"
                  name={fileField}
                  accept={fileField === "resume" ? ".pdf,.doc,.docx" : ".pdf,.doc,.docx,.zip,.ppt,.pptx"}
                  onChange={handleChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
              {formData[fileField] && (
                <p className="text-sm text-green-600 text-center mt-1">
                  Uploaded: {formData[fileField].name}
                </p>
              )}
            </div>
          ))}

          <div className="md:col-span-2 flex flex-col gap-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your requirement in detail"
              rows={4}
              className={`px-4 py-2 rounded-md w-full transition-colors duration-300 ${
                isDarkMode ? "bg-gray-700 text-white focus:ring-[#BB86FC]" : "bg-[#E2EAC6] text-black focus:ring-[#313719]"
              }`}
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-6 py-2 w-md rounded-full my-4 transition-all duration-300 ${
                isFormValid
                  ? isDarkMode
                    ? "bg-[#2B2F18] text-white hover:bg-[#9a5de1] cursor-pointer"
                    : "bg-[#2B2F18] text-white hover:bg-[#333814] cursor-pointer"
                  : "bg-[#2B2F18] text-white opacity-50 cursor-not-allowed"
              }`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
}
