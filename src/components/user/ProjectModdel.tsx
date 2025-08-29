import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

type ProjectModalProps = {
  closeModel: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (data: any) => void;
};

const ProjectModdel: React.FC<ProjectModalProps> = ({ closeModel, onSubmit }) => {
  const { control, handleSubmit, reset } = useForm();

  // Reset form fields when the modal is closed (or on editing)
  useEffect(() => {
    reset({
      projectName: '',
      description: '',
      member: '',
    });
  }, [reset]);

  const handleClose = () => {
    closeModel(false); // Close the modal
  };

  return (
    <>
      <div id="task-modal" className="fixed inset-0 z-50">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-[#1B263B] border border-[#415A77]/50 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#415A77]/30">
              <h2 className="text-xl font-semibold text-[#F1F5F9]">Project Details</h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-[#3A86FF] transition-colors" aria-label="Close modal">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Project Name */}
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Project Name</label>
                  <Controller
                    name="projectName"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF] placeholder-gray-500"
                        placeholder="Enter project name"
                      />
                    )}
                  />
                </div>

                {/* Member */}
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Members</label>
                  <Controller
                    name="member"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF]"
                      >
                        <option>Select Member</option>
                        <option value="member1">Member 1</option>
                        <option value="member2">Member 2</option>
                        <option value="member3">Member 3</option>
                      </select>
                    )}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-[#F1F5F9] mb-2">Description</label>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        rows={4}
                        className="w-full px-4 py-3 bg-[#0D1B2A] border border-[#415A77]/50 rounded-lg text-[#F1F5F9] focus:border-[#3A86FF] focus:outline-none focus:ring-1 focus:ring-[#3A86FF] placeholder-gray-500"
                        placeholder="Enter project description"
                      />
                    )}
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex justify-end space-x-4 pt-4">
                  <button type="button" onClick={handleClose} className="px-6 py-2 border border-[#415A77]/50 text-[#F1F5F9] rounded-lg hover:bg-[#415A77]/20 transition-all duration-200">
                    Cancel
                  </button>
                  <button type="submit" className="px-6 py-2 bg-[#3A86FF] text-white rounded-lg hover:bg-[#3A86FF]/90 transition-all duration-200">
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModdel;
