"use client";

import { useEffect, useState } from "react";
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
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Prefill form when editing
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        company: user.company,
        phone: user.phone ?? "",
        website: user.website ?? "",
      });
    }
  }, [user]);

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

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {["name", "email", "company", "phone", "website"].map((field) => (
        <div key={field}>
          <input
            name={field}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            placeholder={field}
            className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-600"
          />
          {errors[field] && (
            <p className="text-red-500 text-sm">{errors[field]}</p>
          )}
        </div>
      ))}

      <Button type="submit" className="w-full">
        {user ? "Update User" : "Add User"}
      </Button>
    </form>
  );
}
