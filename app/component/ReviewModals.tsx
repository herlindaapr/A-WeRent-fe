"use client";

import { BiX } from "react-icons/bi";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white text-black rounded-sm w-[90%] max-w-[500px] px-[30px] py-[18px] z-10">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-black hover:text-gray-600 cursor-pointer"
          >
            <BiX className="text-[24px]" />
          </button>
        </div>

        {/* Modal Header */}
        <div className="mb-5">
          <h2 className="text-[18px] font-semibold">Write a Review</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="review" className="text-[12px] font-medium">
              Your Review
            </label>
            <textarea
              id="review"
              name="review"
              rows={6}
              className="w-full px-4 py-3 border border-[#9B9A9A] rounded-sm text-[12px] text-black bg-white focus:outline-none focus:border-[#2B6646] resize-none"
              placeholder="Share your thoughts about this product..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-[12px] border border-[#9B9A9A] rounded-sm hover:bg-gray-100 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-[12px] bg-[#CDAA44] rounded-sm text-white hover:bg-[#B8993A] cursor-pointer"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};