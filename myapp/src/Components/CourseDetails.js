import React, { useState, useEffect } from 'react';

function CourseDetails() {
  const [courseData, setCourseData] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Fetch course data from the backend API
    fetch('http://localhost:4000/api/courses') // Replace with the actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCourseData(data);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
        setCourseData([]); // Set courseData to an empty array in case of an error
      });
  }, []);
  const handleJoinClick = (course) => {
    // Assuming 'course.courseName' is the updated course name
    const updatedCourseName = course.courseName;
  
    // Update the local storage with the updated course name
    localStorage.setItem('updatedCourseName', updatedCourseName);
  
    setSelectedCourse(course);
  };
  


  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 style={{ textAlign: 'center' }}>Course Details</h3>
          <br />
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>CourseName</th>
                <th>CourseFees</th>
                <th>CourseDuration</th>
                <th>JoinCourse</th>
              </tr>
            </thead>
            <tbody>
              {courseData.map((course) => (
                <tr key={course.courseid}>
                  <td>{course.courseid}</td>
                  <td>{course.courseName}</td>
                  <td>{course.CourseFees}</td>
                  <td>{course.CourseDuruation}</td>
                  <td>
                    <button style={{border:'none',background:'none'}} onClick={() => handleJoinClick(course)}>
                      Join
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
<br/>
          {selectedCourse && (
            <div className="alert alert-success">
              <p style={{textAlign:'center'}} className="mb-0">
                Join successful for {selectedCourse.courseName}!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
