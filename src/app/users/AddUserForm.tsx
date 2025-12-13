"use client";

import {  useState } from "react";
import { UserSchema, User } from "@/lib/schemas/userSchema";
import { useUserStore } from "@/lib/store/userStore";
import { Button } from "@/components/ui/button";

const FormSchema = UserSchema.omit({ id: true });

interface Props {
  user?: User | null;
  onClose?: () => void;
}

export default function UserForm({ user, onClose }: Props) {
  const addUser = useUserStore((s) => s.addUser);
  const updateUser = useUserStore((s) => s.updateUser);

  const [formData, setFormData] = useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    company: user?.company ?? "",
    phone: user?.phone ?? "",
    website: user?.website ?? "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = FormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (user) {
      updateUser({ id: user.id, ...formData });
    } else {
      addUser({ id: Date.now(), ...formData });
    }

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      website: "",
    });

    onClose?.();
  };

  const fields = [
    { name: "name", label: "Full Name", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", type: "text" },
    { name: "email", label: "Email Address", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", type: "email" },
    { name: "company", label: "Company", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", type: "text" },
    { name: "phone", label: "Phone Number", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", type: "tel" },
    { name: "website", label: "Website", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", type: "text" },
  ];

  return (
    <div className="bg-linear-to-br from-white via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 rounded-2xl border-2 border-emerald-100 dark:border-teal-900 shadow-xl">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={user ? "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" : "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"}
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              {user ? "Edit User" : "Add New User"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {user ? "Update user information" : "Fill in the details below"}
            </p>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              {field.label}
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500 dark:text-teal-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={field.icon}
                  />
                </svg>
              </div>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                className={`
                  w-full pl-11 pr-4 py-3 rounded-lg
                  border-2 
                  ${errors[field.name] 
                    ? 'border-red-400 dark:border-red-600 focus:border-red-500 dark:focus:border-red-500' 
                    : 'border-emerald-200 dark:border-gray-700 focus:border-emerald-400 dark:focus:border-teal-500'
                  }
                  bg-white dark:bg-gray-800
                  focus:ring-2 
                  ${errors[field.name]
                    ? 'focus:ring-red-200 dark:focus:ring-red-900'
                    : 'focus:ring-emerald-200 dark:focus:ring-teal-900'
                  }
                  outline-none
                  placeholder:text-gray-400 dark:placeholder:text-gray-500
                  transition-all duration-200
                  text-gray-900 dark:text-gray-100
                `}
              />
            </div>
            {errors[field.name] && (
              <div className="flex items-center gap-2 mt-2 text-red-600 dark:text-red-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-medium">{errors[field.name]}</p>
              </div>
            )}
          </div>
        ))}

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          {onClose && (
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cancel
            </Button>
          )}
          <Button
            type="button"
            onClick={handleSubmit}
            className="flex-1 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {user ? (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Update User
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add User
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}