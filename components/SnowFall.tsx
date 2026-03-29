"use client";

import Snowfall from "react-snowfall";

export default function SnowEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      <Snowfall
        snowflakeCount={80}
        speed={[0.2, 0.8]}
        wind={[-0.1, 0.1]}
        radius={[0.8, 2]}
        color="#e8fff0"
      />
    </div>
  );
}