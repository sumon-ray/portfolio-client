'use client';

import { addSkill } from '@/services/skillsService';
import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';

type SkillFormValues = {
  name: string;
  type: 'technical' | 'soft';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
};

const SkillForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SkillFormValues>({
    defaultValues: {
      proficiency: 'intermediate',
    }
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: SkillFormValues) => {
    startTransition(async () => {
      const result = await addSkill(data);
      console.log(result, "form")
      if (result.success) {
        alert('Skill added successfully!');
        reset();
      } else {
        alert(`Error: ${result.error}`);
      }
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add New Skill</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* name */}
        <div>
          <label className="block font-medium mb-1">Skill Name</label>
          <input
            type="text"
            {...register('name', { required: 'Skill name is required' })}
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g., React"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        {/* type */}
        <div>
          <label className="block font-medium mb-1">Skill Type</label>
          <select
            {...register('type', { required: 'Type is required' })}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="technical">Technical</option>
            <option value="soft">Soft</option>
          </select>
        </div>

        {/* proficiency */}
        <div>
          <label className="block font-medium mb-1">Proficiency</label>
          <select
            {...register('proficiency')}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        {/* icon */}
        <div>
          <label className="block font-medium mb-1">Icon URL</label>
          <input
            type="text"
            {...register('icon')}
            placeholder="https://example.com/icon.png"
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isPending ? 'Submitting...' : 'Submit Skill'}
        </button>
      </form>
    </div>
  );
};

export default SkillForm;
