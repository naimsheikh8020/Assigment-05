"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";
import RentModal from "../../_components/RentModal";

const reviews = [
  {
    id: 1,
    rating: 5,
    comment: "Excellent quality. Highly recommended!",
    date: "09 Jul 2026",
  },
  {
    id: 2,
    rating: 4,
    comment: "Very comfortable and worth the price.",
    date: "05 Jul 2026",
  },
];

export default function GearDetailsPage() {
  const [open, setOpen] = useState(false);
  const handleRent = (payload: {
    startDate: string;
    endDate: string;
    items: {
      gearItemId: string;
      quantity: number;
    }[];
  }) => {
    console.log("Rental Payload:", payload);
  };

  return (
    <main className="min-h-screen bg-slate-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Product */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
                alt="Running Shoe"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="w-fit rounded-full bg-indigo-500/20 px-3 py-1 text-sm text-indigo-300">
              Running
            </span>

            <h1 className="mt-4 text-4xl font-bold">
              Adidas Running Shoe
            </h1>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <span className="text-slate-400">
                (2 Reviews)
              </span>
            </div>

            <p className="mt-6 text-slate-400">
              Official Nike Shoes. Premium quality running shoes
              suitable for beginners and professionals.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex justify-between">
                <span className="text-slate-400">Brand</span>

                <span>Nike</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Condition</span>

                <span>NEW</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">Provider</span>

                <span>Provider</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Available Stock
                </span>

                <span>1</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Price Per Day
                </p>

                <h2 className="text-5xl font-bold">
                  $200
                  <span className="text-xl text-slate-400">
                    /day
                  </span>
                </h2>
              </div>

              <button
                onClick={() => setOpen(true)}
                className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold text-white">
            Write a Review
          </h2>

          <p className="mt-2 text-slate-400">
            Share your experience with this gear.
          </p>

          {/* Rating */}

          <div className="mt-8">
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Rating
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="text-yellow-400 transition hover:scale-110"
                >
                  <Star
                    fill="currentColor"
                    size={32}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}

          <div className="mt-8">
            <label className="mb-3 block text-sm font-medium text-slate-300">
              Comment
            </label>

            <textarea
              rows={5}
              placeholder="Share your experience..."
              className="w-full rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-white outline-none transition focus:border-indigo-500"
            />
          </div>

          <button className="mt-8 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:scale-105">
            Submit Review
          </button>
        </div>

        {/* Reviews */}
        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-bold">
            Customer Reviews
          </h2>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400">
                    {Array.from({
                      length: review.rating,
                    }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <span className="text-sm text-slate-500">
                    {review.date}
                  </span>
                </div>

                <p className="mt-4 text-slate-300">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <RentModal
        open={open}
        onClose={() => setOpen(false)}
        gearItemId="e29816fd-adcc-4ca9-8253-3862c93fad49"
        gearName="Adidas Running Shoe"
        pricePerDay={200}
        availableStock={1}
        onSubmit={handleRent}
      />
    </main>
  );
}