// Function to process students based on marks
function processStudents(students) {
    // Step 1: Filter students who scored above 60 marks
    const filteredStudents = students.filter(student => student.marks > 60);
  
    // Step 2: Sort the filtered array in descending order of marks
    const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);
  
    // Step 3: Map the sorted array to extract the student names
    const sortedNames = sortedStudents.map(student => student.name);
  
    // Return the array of sorted names
    return sortedNames;
  }
  
  // Example usage
  const students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
  ];
  
  console.log(processStudents(students));
  