import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  phoneNumber: number;
  email: string;
  company: string;
  location: string;
  file: FileList;
};

type FormPropType = {
  className?: string;
};

const MyForm = ({ className }: FormPropType) => {
  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // on form submission
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Access the first file from the file list
    const file = data.file[0];

    // Create FormData (standard "proper" way to send files)
    // Think of FormData as a digital "envelope" designed specifically for sending files and form inputs.
    const formData = new FormData();
    formData.append("file", file);

    // This is the form data.
    // BRO! If you have any issue accessing the uploaded file try to access it by: data.file[0]
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`w-full ${className}`}>
      {/* NAME */}
      <label className="block">Your Name</label>
      {errors.name && (
        <div className="text-red-600 text-xs ms-2">{errors.name.message}</div>
      )}
      <input
        {...register("name", { required: "*your name is required." })}
        className="border rounded-sm my-2 p-2 w-full"
      />
      {/* MOBILE NUMBER */}
      <label className="block">Mobile Number</label>
      {errors.phoneNumber && (
        <div className="text-red-600 text-xs ms-2">
          {errors.phoneNumber.message}
        </div>
      )}
      <input
        {...register("phoneNumber", {
          required: "*phone number is required.",
          pattern: {
            // Matches 10 digits starting with 98 or 97
            value: /^(98|97)\d{8}$/,
            message:
              "*invalid mobile number (must start with 98 or 97 and be 10 digits).",
          },
        })}
        className="border rounded-sm my-2 p-2 w-full"
      />
      {/* EMAIL */}
      <label className="block">Email</label>
      {errors.email && (
        <div className="text-red-600 text-xs ms-2">{errors.email.message}</div>
      )}
      <input
        {...register("email", {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "*please enter a valid email address.",
          },
        })}
        className="border rounded-sm my-2 p-2 w-full"
      />
      {/* COMPANY */}
      <label className="block">Company</label>
      <input
        {...register("company")}
        className="border rounded-sm my-2 p-2 w-full"
      />
      {/* LOCATION */}
      <label className="block">Location</label>
      <input
        {...register("location")}
        className="border rounded-sm my-2 p-2 w-full"
      />

      {/* FILE UPLOAD */}
      {errors.file && (
        <div className="text-red-600 text-xs ms-2">{errors.file.message}</div>
      )}
      <input
        className="file:text-lg file:text-white bg-green-600 hover:bg-green-700 text-gray-700   font-semibold py-2 px-4 my-4 rounded-lg w-full"
        type="file"
        accept=".pdf, .docx" //HTML level restriction
        {...register("file", {
          required: "Please select a file.",
          validate: {
            // Validate file size (i.e., less than 20MB)
            lessThan20MB: (files) =>
              files[0]?.size < 20 * 1024 * 1024 || "*max file size is 20MB",
            //Validate file type
            acceptedFormats: (files) =>
              [
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
              ].includes(files[0]?.type) || "Only PDF or DOCX allowed",
          },
        })}
      />

      {/* SUBMIT BUTTON */}
      <input
        type="submit"
        className="block mx-auto bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md text-gray-100 font-semibold"
      />
    </form>
  );
};

export default MyForm;
