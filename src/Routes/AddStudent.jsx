import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const AddStudent = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState({
    fullname: '',
    profilePicture: '',
    address: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    programStudy: '',
  });

  const handleInputChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const faculty = getFacultyFromProgramStudy(studentData.programStudy);

    const data = {
      ...studentData,
      faculty: faculty,
    };

    fetch('http://localhost:3001/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        navigate('/student');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const getFacultyFromProgramStudy = (programStudy) => {
    if (programStudy === 'Ekonomi' || programStudy === 'Manajemen' || programStudy === 'Akuntansi') {
      return 'Fakultas Ekonomi';
    } else if (
      programStudy === 'Administrasi Publik' ||
      programStudy === 'Administrasi Bisnis' ||
      programStudy === 'Hubungan Internasional'
    ) {
      return 'Fakultas Ilmu Sosial dan Politik';
    } else if (programStudy === 'Teknik Sipil' || programStudy === 'Arsitektur') {
      return 'Fakultas Teknik';
    } else if (programStudy === 'Matematika' || programStudy === 'Fisika' || programStudy === 'Informatika') {
      return 'Fakultas Teknologi Informasi dan Sains';
    } else {
      return '';
    }
  };

  return (
    <>
      <NavBar />
      <Box p={4} maxWidth="90vw" margin="0 auto" minHeight="65vh">
        <h1>Edit Student</h1>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="fullname">Full Name</FormLabel>
            <Input
              type="text"
              id="fullname"
              name="fullname"
              value={studentData.fullname}
              onChange={handleInputChange}
              data-testid="name"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="profilePicture">Profile Picture</FormLabel>
            <Input
              type="text"
              id="profilePicture"
              name="profilePicture"
              value={studentData.profilePicture}
              onChange={handleInputChange}
              data-testid="profilePicture"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              type="text"
              id="address"
              name="address"
              value={studentData.address}
              onChange={handleInputChange}
              data-testid="address"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={studentData.phoneNumber}
              onChange={handleInputChange}
              data-testid="phoneNumber"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="birthDate">Birth Date</FormLabel>
            <Input
              type="date"
              id="birthDate"
              name="birthDate"
              value={studentData.birthDate}
              onChange={handleInputChange}
              data-testid="date"
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Input
              id="gender"
              name="gender"
              value={studentData.gender}
              onChange={handleInputChange}
              data-testid="gender"
              required
            />
            
          </FormControl>
          
          <FormControl>
            <FormLabel htmlFor="programStudy">Program Study</FormLabel>
            <Select
              id="programStudy"
              name="programStudy"
              value={studentData.programStudy}
              onChange={handleInputChange}
              data-testid="prody"
              required
            >
              <option value="">Select Program Study</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
              <option value="Administrasi Publik">Administrasi Publik</option>
              <option value="Administrasi Bisnis">Administrasi Bisnis</option>
              <option value="Hubungan Internasional">Hubungan Internasional</option>
              <option value="Teknik Sipil">Teknik Sipil</option>
              <option value="Arsitektur">Arsitektur</option>
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Informatika">Informatika</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="pink" mt={4} data-testid="add-btn">
            Add Student
        </Button>
        </form>
        </Box>
        <Footer/>
    </>
  );
};

export default AddStudent;

