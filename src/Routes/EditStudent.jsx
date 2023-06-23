import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input, Select, Box, Flex,  Text } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [faculty, setFaculty] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`);
      const data = await response.json();
      console.log(data);
      setStudent(data);
      setFullname(data.fullname);
      setAddress(data.address);
      setPhoneNumber(data.phoneNumber);
      setBirthDate(data.birthDate);
      setGender(data.gender);
      setFaculty(data.faculty);
      setProgramStudy(data.programStudy);
      setStudent(data);
      setLoading(false);
    } catch (error) {
      console.log("uyyy");
      console.log(error);
    }
  };

  const handleFacultyChange = (e) => {
    setFaculty(e.target.value);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          fullname,
          profilePicture: student.profilePicture,
          address,
          phoneNumber,
          birthDate,
          gender,
          faculty,
          programStudy,
        }),
      });
      const data = await response.json();
      console.log(data);
      navigate("/student");
    } catch (error) {
      console.log(error);
    }
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

      <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Text as="h2" fontWeight="bold" fontSize="3xl" marginTop="3rem">
          Edit Student
        </Text>
        <Box
          width="150px"
          height="150px"
          borderRadius="50%"
          overflow="hidden"
          marginY="2rem"
        >
          <img
            src={student.profilePicture}
            data-testid="profilePicture"
            alt={`Profile picture of ${student.fullname}`}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>

      <Box maxWidth="90vw"  margin="0 auto">
      <form onSubmit={handleSubmit} >
        <FormControl>
          <FormLabel htmlFor="fullname">Full Name</FormLabel>
          <Input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            data-testid="name"
            required
          />
        </FormControl>
        <br />
        <FormControl >
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            data-testid="address"
            required
          />
        </FormControl>
        <br />
        <FormControl >
          <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
          <Input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            data-testid="phoneNumber"
            required
          />
        </FormControl >
        <br />
        <FormControl >
          <FormLabel htmlFor="birthDate">Birth Date</FormLabel>
          <Input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            data-testid="date"
            required
          />
        </FormControl>
        <br />
        <FormControl >
          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Input
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            data-testid="gender"
            required
            >
          </Input>
        </FormControl>
        <br />
        
        <FormControl >
          <FormLabel htmlFor="programStudy">Program Study</FormLabel>
          <Input
            id="programStudy"
            value={programStudy}
            onChange={(e) => setProgramStudy(e.target.value)}
            data-testid="prody"
            required
          >
            
          </Input>
        </FormControl>
        <br />
        <Button type="submit" data-testid="edit-btn" colorScheme="pink">
          Edit Student
        </Button>
      </form>
        <Footer />
      </Box>
    </>
  );
};

export default EditStudent;
