"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewExperiencePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/manage-experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          endDate: formData.endDate || null,
        }),
      });

      if (res.ok) {
        router.push("/admin/admin-experience");
        router.refresh();
      } else {
        console.error("Failed to create experience");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Add New Experience</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border">
        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <Input name="role" value={formData.role} onChange={handleChange} required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company</label>
          <Input name="company" value={formData.company} onChange={handleChange} required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <Input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date (leave blank if current)</label>
            <Input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea name="description" value={formData.description} onChange={handleChange} required rows={5} />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Creating..." : "Add Experience"}
        </Button>
      </form>
    </div>
  );
}
