import { Card } from "@/components/ui/card";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  phoneNumber: number;
  email: string;
  company: string;
  location: string;
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
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

      {/* SUBMIT BUTTON */}
      <input
        type="submit"
        className="block mx-auto bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md text-gray-100 font-semibold"
      />
    </form>
  );
};

export default MyForm;
