import React from "react";
import Link from "next/link";

const aboutus = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <div>
      {details.map((item) => {
        return (
          <ul>
            <li>
              <Link href={`/aboutus/${item.id}`}>{item.name}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default aboutus;
