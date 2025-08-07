import React, { useEffect, useState } from "react";
import { UploadCloud } from "lucide-react";
const baseURL = import.meta.env.VITE_BASE_URL;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CareersForm() {
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
    const fetchVacancies = async () => {
      try {
        const response = await fetch(`${baseURL}/api/vacancy/all`);
        const data = await response.json();
        if (data.success) {
          setVacancies(data.vacancies);
        }
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
  data.append("firstName", formData.firstName);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("currentPosition", formData.position);
  data.append("experience", formData.experience);
  data.append("preferredLocation", formData.location);
  data.append("resume", formData.resume);
  if (formData.portfolio) {
    data.append("portfolio", formData.portfolio);
  }
  data.append("description", formData.message);

  // Show loading toast
  const toastId = toast.loading("Uploading your application...");

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
      });

      // Reset form
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
    });
  }
};


  const scrollToForm = () => {
    document.querySelector("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto p-6 rounded-lg">
        <div className=" py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-[#313719] mb-12 tracking-tight">
              Career Opportunities at{" "}
              <span className="underline decoration-[#313719] underline-offset-4">
                Triovex
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {vacancies.map((job) => {
                const isExpanded = expandedJobId === job._id;
                const visibleSkills = isExpanded
                  ? job.skills
                  : job.skills?.slice(0, 3);

                return (
                  <div
                    key={job._id}
                    className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-transform hover:scale-[1.01] overflow-hidden"
                  >
                    {/* Highlight Line */}
                    <div className="h-1 bg-[#313719]" />

                    <div className="p-6 space-y-5">
                      {/* Job Title */}
                      <h2 className="text-center text-2xl font-semibold text-[#313719] tracking-wide">
                        {job.jobTitle}
                      </h2>

                      {/* Job Info */}
                      <div className="text-sm text-gray-700 space-y-2">
                        <div className="flex">
                          <span className="w-28 font-medium text-[#313719]">
                            Location:
                          </span>
                          <span className="flex-1">{job.location}</span>
                        </div>
                        <div className="flex">
                          <span className="w-28 font-medium text-[#313719]">
                            Experience:
                          </span>
                          <span className="flex-1">
                            {job.experience}+ Years
                          </span>
                        </div>
                      </div>

                      {/* Skills Section */}
                      <div>
                        <h4 className="font-medium text-[#313719] mb-2 text-sm">
                          Required Skills
                        </h4>
                        <ul className="text-sm text-gray-800 space-y-1 ml-1">
                          {visibleSkills?.map((skill, index) => (
                            <li key={index} className="list-disc list-inside">
                              {skill}
                            </li>
                          ))}
                        </ul>
                        {job.skills?.length > 3 && (
                          <button
                            onClick={() =>
                              setExpandedJobId(isExpanded ? null : job._id)
                            }
                            className="text-xs mt-2 text-[#313719] underline hover:text-[#2a3016] transition"
                          >
                            {isExpanded ? "Show Less" : "Read More"}
                          </button>
                        )}
                      </div>

                      {/* Apply Button */}
                      <button
                        className="w-full mt-4 bg-[#313719] text-white py-2 rounded-md hover:bg-[#2a3016] transition text-sm"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            position: job.jobTitle,
                          }));
                          scrollToForm();
                        }}
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

        <div className="text-center mb-8">
          <button className="bg-[#3137191A] text-sm px-4 py-2 rounded-full mb-2 font-medium">
            Upload Resume with Portfolio
          </button>
          <p className="text-sm text-gray-500 my-3">
            Don’t see the perfect role? Send us your resume and portfolio.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F8F8F8] p-6 rounded-lg"
        >
          {[
            {
              name: "firstName",
              label: "Full Name",
              type: "text",
              placeholder: "Enter your full name",
            },
            {
              name: "email",
              label: "Email Address",
              type: "email",
              placeholder: "Enter your email",
            },
            {
              name: "phone",
              label: "Phone Number",
              type: "text",
              placeholder: "Enter your phone number",
            },
            {
              name: "position",
              label: "Current Position",
              type: "text",
              placeholder: "Enter your current role",
            },
            {
              name: "experience",
              label: "Years of Experience",
              type: "text",
              placeholder: "e.g. 3 years",
            },
            {
              name: "location",
              label: "Preferred Location",
              type: "text",
              placeholder: "Enter preferred location",
            },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="bg-[#E2EAC6] px-4 py-2 rounded-full w-full"
              />
            </div>
          ))}

          {/* Resume Upload */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Upload Resume
            </label>
            <div className="bg-[#E2EAC6] rounded-md p-6 flex flex-col items-center justify-center text-gray-500 relative">
              <UploadCloud className="w-10 h-10 mb-2" />
              <p className="text-sm mb-2">Click to upload</p>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            {formData.resume && (
              <p className="text-sm text-green-600 text-center mt-1">
                Uploaded: {formData.resume.name}
              </p>
            )}
          </div>

          {/* Portfolio Upload */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Upload Portfolio (Optional)
            </label>
            <div className="bg-[#E2EAC6] rounded-md p-6 flex flex-col items-center justify-center text-gray-500 relative">
              <UploadCloud className="w-10 h-10 mb-2" />
              <p className="text-sm mb-2">Click to upload</p>
              <input
                type="file"
                name="portfolio"
                accept=".pdf,.doc,.docx,.zip,.ppt,.pptx"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
            {formData.portfolio && (
              <p className="text-sm text-green-600 text-center mt-1">
                Uploaded: {formData.portfolio.name}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your requirement in detail"
              rows={4}
              className="bg-[#E2EAC6] px-4 py-2 rounded-md w-full resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-6 py-2 w-md rounded-full my-4 transition-all duration-300 ${
                isFormValid
                  ? "bg-[#1C1F0A] text-white hover:bg-[#333814] cursor-pointer"
                  : "bg-[#1C1F0A] text-white opacity-50 cursor-not-allowed"
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
