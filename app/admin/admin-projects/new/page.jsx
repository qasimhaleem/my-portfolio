"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    version: "",
    tags: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      // Upload image to cloudinary via our API if present
      if (formData.image) {
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file: formData.image }),
        });
        if (uploadRes.ok) {
          const uploadData = await uploadRes.json();
          imageUrl = uploadData.url;
        }
      }

      // Prepare project data
      const projectData = {
        title: formData.title,
        description: formData.description,
        version: formData.version,
        tags: formData.tags.split(",").map((tag) => tag.trim()).filter((tag) => tag),
        image: imageUrl || null,
      };

      // Submit to project API
      const res = await fetch("/api/manage-projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(projectData),
      });

      if (res.ok) {
        router.push("/admin/admin-projects");
        router.refresh();
      } else {
        console.error("Failed to create project");
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
        <h2 className="text-3xl font-bold tracking-tight">Add New Project</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg border">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Input name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <Textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Version</label>
          <Input name="version" value={formData.version} onChange={handleChange} />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
          <Input name="tags" value={formData.tags} onChange={handleChange} placeholder="React, Next.js, Tailwind" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Project Image</label>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Creating..." : "Create Project"}
        </Button>
      </form>
    </div>
  );
}
