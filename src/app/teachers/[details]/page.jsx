
import React from 'react';

const page = () => {
  return (
    <div>
      Details Page
    </div>
  );
};

export default page;

// "use client"
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";

// const TeacherDetailsPage = () => {
//   const router = useRouter();
//   const { teacherId } = router.query; // Get the teacherId from the dynamic route parameter

//   const [teacherData, setTeacherData] = useState(null);

//   useEffect(() => {
//     // Fetch tutor.json from the public folder
//     fetch("/tutor.json")
//       .then((response) => response.json())
//       .then((data) => setTeacherData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const teacher = teacherData?.find((data) => data.id === teacherId);

//   if (!teacher) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="mx-auto">
//       <div className="bg-emerald-200 m-3 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">{teacher.name}</h2>

//         <Image
//           width={190}
//           height={190}
//           src={teacher.image_url}
//           alt={teacher.name}
//           className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
//         />

//         <p>
//           <strong>Education:</strong> {teacher.education}
//         </p>

//         {/* Display other details about the teacher */}
//       </div>
//     </div>
//   );
// };

// export default TeacherDetailsPage;
