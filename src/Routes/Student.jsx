import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableContainer, Box, Select, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { studentId } from '../Task';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('http://localhost:3001/student')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter((student) => student.faculty === filter);
      setFilteredStudents(filtered);
    }
  }, [filter, students]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedStudents = students.filter((student) => student.id !== id);
        console.log(students);
        setStudents(updatedStudents);
        setFilteredStudents(updatedStudents);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (loading) {
    return (
      <>
      <NavBar />
        
          <p>Loading ...</p>
        
      <Footer />
      </>
    )
  }

  return (
    <>
      <NavBar />
      <Box p={4} minHeight="65vh">
        <h1>Student List</h1>
        <Select
          data-testid="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
          <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
          <option value="Fakultas Teknik">Fakultas Teknik</option>
          <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
        </Select>
        <TableContainer className='test-table-container'>

        <Table variant="striped" colorScheme="pink" mt={4}>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Full Name</Th>
              <Th>Faculty</Th>
              <Th>Program Study</Th>
              <Th>Option</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredStudents.map((student, index) => (
              <Tr key={student.id} className="student-data-row">
                <Td>{index + 1}</Td>
                <Td>
                  <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                </Td>
                <Td>{student.faculty}</Td>
                <Td>{student.programStudy}</Td>
                <Td>
                  <Button
                    data-testid={`delete-${student.id}`}
                    onClick={() => handleDelete(student.id)}
                    colorScheme="pink"
                    variant="outline"
                    size="sm"
                  >
                    Delete
                  </Button>
                </Td>       
              </Tr>
            ))}
          </Tbody>
        </Table>
        </TableContainer>
      </Box>
      <Footer />
    </>
  );
};

export default Student;
