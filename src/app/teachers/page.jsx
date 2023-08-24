"use client";
import Link from "next/link";
import Image from 'next/image';
import React, { useState, useEffect } from "react";

const Teacher = () => {
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    // Fetch tutor.json from the public folder
    fetch("/tutor.json")
      .then((response) => response.json())
      .then((data) => setTeacherData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(teacherData);

  const Detailsfunc = (id) => {
    console.log(id)
    }
    

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 bg-slate-300 ">
        {teacherData?.map((data) => (
          <div key={data.id} className="bg-emerald-200 m-3 p-6 rounded-lg sha-md transition-transform hover:scale-105"
          >
            
            <h2 className="text-lg font-semibold mb-2">{data.name}</h2>

            <Image
              width={190} height={190}
              src={data.image_url}
              alt={data.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
            />

            <p>
              <strong>Education:</strong> {data.education}
            </p>

            <h3 className="mt-4 mb-2 font-semibold">
              Education Qualification:
            </h3>
            <ul className="list-disc pl-6">
              {data.education_qualification.map((qualification, index) => (
                <li key={index}>
                  {qualification.degree} - {qualification.institution} (
                  {qualification.year_completed})
                </li>
              ))}
            </ul>

            <p>
              <strong>Experience:</strong> {data.experience}
            </p>

            <p>
              <strong>Languages Spoken:</strong>{" "}
              {data.languages_spoken.join(", ")}
            </p>

            <p>
              <strong>Contact:</strong> Email: {data.contact.email}, Phone:{" "}
              {data.contact.phone}
            </p>
            <div className="card-actions justify-end">
      <Link href={`http://localhost:3000/teachers/${data.id}`}>
      <button onClick={()=>Detailsfunc(data.id)} className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-">Details</button>
      </Link>
    </div>

            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
