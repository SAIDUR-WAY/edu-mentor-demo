"use client";
import Link from "next/link";
import Image from "next/image";
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
    console.log(id);
  };

  return (
    <div className="w-11/12 mx-auto">
  <div className="grid grid-cols-1 bg-base-100 gap-4 md:grid-cols-2 lg:grid-cols-3 transition ease-in-out delay-150 hover:border-cyan-500 hover:-translate-y-2 mx-auto hover:shadow-cyan-500/50">
    {teacherData?.map((data) => (
      <div
        key={data.id}
        className=" m-3 p-6 rounded-lg sha-md transition-transform hover:scale-105"
      >
        <h2 className="text-lg font-semibold mb-2">{data.name}</h2>

        <div className=" rounded hover:outline-cyan-500 shadow-lg hover:shadow-cyan-500/50 p-2 flex items-center justify-center">
  <Image
    width={190}
    height={190}
    src={data.image_url}
    alt={data.name}
  />
</div>


        <table className="w-full mt-6">
          <tbody>
            <tr className="bg-gray-100">
              <td >
                <strong >Education:</strong>
              </td>
              <td >{data.education}</td>
            </tr>
           
            <tr >
              <td >
                <strong >Experience:</strong>
              </td>
              <td >{data.experience}</td>
            </tr>
            <tr >
              <td>
                <strong >Language:</strong>
              </td>
              <td >{data.languages_spoken.join(", ")}</td>
            </tr>
            <tr>
              <td>
                <strong>Contact:</strong>
              </td>
              <td>
                Email: {data.contact.email}, Phone: {data.contact.phone}
              </td>
            </tr>
            {/* Add more rows for additional fields */}
          </tbody>
        </table>

        <div className="card-actions justify-end">
          <Link href={`http://localhost:3000/teachers/${data.id}`}>
            <button
              onClick={() => Detailsfunc(data.id)}
              className="btn w-full text-gray-300 bg-cyan-700 hover:bg-cyan-800 hover:text-white  button-"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Teacher;
