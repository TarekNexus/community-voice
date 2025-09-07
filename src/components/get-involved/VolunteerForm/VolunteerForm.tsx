"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UploadCloud, } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";

// ✅ Validation schema
const formSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  dob: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  mobile: z.string().min(1, "Required"),
  landline: z.string().optional(),
  city: z.string().min(1, "Required"),
  availability: z.string().min(1, "Required"),
  whyVolunteer: z.string().min(1, "Required"),
  skills: z.string().min(1, "Required"),
  file: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function VolunteerForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormValues) => {
    console.log("Form Data:", values);
  };

  return (
    <div className="lg:max-w-8/12  w-11/12 mb-10 mx-auto bg-[#F5F4EF] rounded-2xl p-8">
      <h2 className="text-[36px] text-[#1F473E] font-semibold mb-6">
        Join as a Volunteer
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* First Name */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">First Name</label>
          <input
            {...register("firstName")}
            placeholder="Enter first name"
            className="w-full px-3 py-2 border border-[#606060] bg-[#F5F5F5] rounded-md"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">Last Name</label>
          <input
            {...register("lastName")}
            placeholder="Enter last name"
            className="w-full border border-[#606060] bg-[#F5F5F5] px-3 py-2 rounded-md"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">Date of Birth</label>
          <input
            type="date"
            {...register("dob")}
            className="w-full border border-[#606060] bg-[#F5F5F5] px-3 py-2 rounded-md"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm">{errors.dob.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter email"
            className="w-full  border border-[#606060] bg-[#F5F5F5] px-3 py-2 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">Mobile</label>
          <input
            {...register("mobile")}
            placeholder="Enter mobile"
            className="w-full border border-[#606060] bg-[#F5F5F5] px-3 py-2 rounded-md"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile.message}</p>
          )}
        </div>

        {/* Landline */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">Landline</label>
          <input
            {...register("landline")}
            placeholder="Enter landline"
            className="w-full border border-[#606060] bg-[#F5F5F5] px-3 py-2 rounded-md"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">City</label>
          <input
            {...register("city")}
            placeholder="Enter city"
            className="w-full border border-[#606060] bg-[#F5F5F5] px-3 py-2 rounded-md"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* Availability */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">Availability</label>
          <input
            {...register("availability")}
            placeholder="e.g. Weekends"
            className="w-full border border-[#606060] bg-[#F5F5F5] px-3 py-2 rounded-md"
          />
          {errors.availability && (
            <p className="text-red-500 text-sm">{errors.availability.message}</p>
          )}
        </div>

        {/* Why Volunteer */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">
            Why do you want to volunteer?
          </label>
          <input
            {...register("whyVolunteer")}
            placeholder="Your reason"
            className="w-full border  border-[#606060] bg-[#F5F5F5]  px-3 py-2 rounded-md"
          />
          {errors.whyVolunteer && (
            <p className="text-red-500 text-sm">
              {errors.whyVolunteer.message}
            </p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label className="block text-lg text-[#1F473E] mb-2 font-bold">Skills or Experience</label>
          <input
            {...register("skills")}
            placeholder="Your skills"
            className="w-full border border-[#606060] bg-[#F5F5F5]  px-3 py-2 rounded-md"
          />
          {errors.skills && (
            <p className="text-red-500 text-sm">{errors.skills.message}</p>
          )}
        </div>

        {/* File Upload */}
        <div className="col-span-1 md:col-span-2">
          
        <div className="border p-3 border-[#60606080] rounded-[25px]">
            <div className="border-2 border-dashed  border-green-500 rounded-lg p-6 text-center">
            <UploadCloud className="mx-auto h-8 w-8 text-gray-500" />
            <p className="mt-2 text-[16px] font-semibold text-[#71717A]">
              Drag and drop or{" "}
              <label className="text-green-600 font-semibold cursor-pointer">
                Click to upload
                <input
                  type="file"
                  {...register("file")}
                  className="hidden"
                  accept=".csv,.xls,.xlsx"
                />
              </label>
            </p>
            <p className="text-xs text-gray-400 font-medium">
              Supported formats: CSV or XLS. Max Size: 25MB
            </p>
          </div>
        </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
            <div className="flex justify-center gap-4">
                            <button type="submit" className=" cursor-pointer text-white bg-[#1F473E] max-w-[230px] max-h-[60px] backdrop-blur-md border  hover:backdrop-blur-md rounded-4xl flex items-center justify-between gap-2   px-1    ">
                              <span className="py-3 flex justify-center text-xl pl-4">
                                Signup  today
                              </span>
                              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
                                <FiArrowUpRight size={30} className="text-black font-bold " />
                              </span>
                            </button>
                         
                          </div>
          
        </div>
      </form>
    </div>
  );
}
