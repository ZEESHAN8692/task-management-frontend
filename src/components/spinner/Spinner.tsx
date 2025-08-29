"use client";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <section className="flex items-center justify-center space-x-3">
        <span className="h-5 w-5 rounded-full bg-blue-300 animate-pulse-dot [animation-delay:-0.3s]" />
        <span className="h-5 w-5 rounded-full bg-blue-300 animate-pulse-dot [animation-delay:-0.1s]" />
        <span className="h-5 w-5 rounded-full bg-blue-300 animate-pulse-dot [animation-delay:0.1s]" />
        <span className="h-5 w-5 rounded-full bg-blue-300 animate-pulse-dot [animation-delay:0.3s]" />
        <span className="h-5 w-5 rounded-full bg-blue-300 animate-pulse-dot [animation-delay:0.5s]" />
      </section>
    </div>
  );
};

export default Spinner;
