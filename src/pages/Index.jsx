import { Container, Box, Text, VStack, HStack, Image, Button, Input, Textarea, FormControl, FormLabel, IconButton, Grid, GridItem, Link } from "@chakra-ui/react";
import { FaAmazon, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const books = [
  { title: "Book 1", genre: "Fiction", img: "https://images.unsplash.com/photo-1536237880829-dd441c249e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAxfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080", link: "https://amazon.com/book1" },
  { title: "Book 2", genre: "Non-Fiction", img: "https://images.unsplash.com/photo-1466695108335-44674aa2058b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjAyfGVufDB8fHx8MTcxNjQyMTkwMXww&ixlib=rb-4.0.3&q=80&w=1080", link: "https://amazon.com/book2" },
  // Add more books here
];

const Index = () => {
  return (
    <Container maxW="container.xl" bg="black" color="#FFCA0C" p={4}>
      <Header />
      <Homepage />
      <Books />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </Container>
  );
};

const Header = () => (
  <Box as="header" py={4} borderBottom="1px" borderColor="#FFCA0C">
    <HStack justifyContent="space-between">
      <Text fontSize="2xl" fontWeight="bold">
        Magic Print Production
      </Text>
      <HStack spacing={4}>
        <Button variant="link" color="#FFCA0C">
          Home
        </Button>
        <Button variant="link" color="#FFCA0C">
          Books
        </Button>
        <Button variant="link" color="#FFCA0C">
          Services
        </Button>
        <Button variant="link" color="#FFCA0C">
          About Us
        </Button>
        <Button variant="link" color="#FFCA0C">
          Contact
        </Button>
      </HStack>
    </HStack>
  </Box>
);

const Homepage = () => (
  <Box as="section" py={8}>
    <VStack spacing={4} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold">
        Welcome to Magic Print Production
      </Text>
      <Text>We specialize in creating and publishing high-quality books on Amazon KDP.</Text>
      <Text fontSize="2xl" fontWeight="bold">
        Featured Books
      </Text>
      <HStack spacing={4}>
        {books.slice(0, 3).map((book, index) => (
          <Box key={index} textAlign="center">
            <Image src={book.img} alt={book.title} boxSize="150px" />
            <Text>{book.title}</Text>
            <Button as="a" href={book.link} target="_blank" colorScheme="yellow" leftIcon={<FaAmazon />}>
              Buy on Amazon
            </Button>
          </Box>
        ))}
      </HStack>
      <Text fontSize="2xl" fontWeight="bold">
        Our Services
      </Text>
      <Text>We offer custom book printing, cover design, and bulk orders for journals, sketchbooks, and more.</Text>
    </VStack>
  </Box>
);

const Books = () => (
  <Box as="section" py={8}>
    <VStack spacing={4} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold">
        Our Books
      </Text>
      <Input placeholder="Search by genre or title" variant="filled" bg="white" color="black" />
      <Grid templateColumns="repeat(auto-fill, minmax(150px, 1fr))" gap={4}>
        {books.map((book, index) => (
          <GridItem key={index} textAlign="center">
            <Image src={book.img} alt={book.title} boxSize="150px" />
            <Text>{book.title}</Text>
            <Button as="a" href={book.link} target="_blank" colorScheme="yellow" leftIcon={<FaAmazon />}>
              Buy on Amazon
            </Button>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  </Box>
);

const Services = () => (
  <Box as="section" py={8}>
    <VStack spacing={4} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold">
        Our Services
      </Text>
      <Text>We offer a range of services to help you create the perfect book.</Text>
      <Text fontSize="2xl" fontWeight="bold">
        Custom Book Printing
      </Text>
      <Text>High-quality printing for paperback and hardcover books.</Text>
      <Text fontSize="2xl" fontWeight="bold">
        Custom Book Cover Design
      </Text>
      <Text>Professional cover design services to make your book stand out.</Text>
      <Text fontSize="2xl" fontWeight="bold">
        Bulk Orders
      </Text>
      <Text>Order custom journals, sketchbooks, and composition books in bulk.</Text>
      <FormControl id="bulk-order" mt={4}>
        <FormLabel>Bulk Order Inquiry</FormLabel>
        <Textarea placeholder="Describe your bulk order requirements" variant="filled" bg="white" color="black" />
        <Button mt={2} colorScheme="yellow">
          Submit Inquiry
        </Button>
      </FormControl>
    </VStack>
  </Box>
);

const AboutUs = () => (
  <Box as="section" py={8}>
    <VStack spacing={4} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold">
        About Us
      </Text>
      <Text>Magic Print Production is dedicated to bringing your book ideas to life.</Text>
      <Text>Our mission is to provide high-quality printing and design services to authors and creators.</Text>
      <Text fontSize="2xl" fontWeight="bold">
        Our Team
      </Text>
      <HStack spacing={4}>
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwMXxlbnwwfHx8fDE3MTY0MjMwNzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 1" boxSize="150px" borderRadius="full" />
          <Text>John Doe</Text>
          <Text>Founder & CEO</Text>
        </Box>
        <Box textAlign="center">
          <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVtYmVyJTIwMnxlbnwwfHx8fDE3MTY0MjMwNzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team Member 2" boxSize="150px" borderRadius="full" />
          <Text>Jane Smith</Text>
          <Text>Lead Designer</Text>
        </Box>
        {/* Add more team members here */}
      </HStack>
    </VStack>
  </Box>
);

const Contact = () => (
  <Box as="section" py={8}>
    <VStack spacing={4} textAlign="center">
      <Text fontSize="3xl" fontWeight="bold">
        Contact Us
      </Text>
      <FormControl id="contact-form">
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" variant="filled" bg="white" color="black" />
        <FormLabel mt={4}>Email</FormLabel>
        <Input placeholder="Your Email" variant="filled" bg="white" color="black" />
        <FormLabel mt={4}>Message</FormLabel>
        <Textarea placeholder="Your Message" variant="filled" bg="white" color="black" />
        <Button mt={4} colorScheme="yellow">
          Send Message
        </Button>
      </FormControl>
      <Text>Email: contact@magicprintproduction.com</Text>
      <Text>Phone: (123) 456-7890</Text>
      <HStack spacing={4}>
        <IconButton as="a" href="https://facebook.com" target="_blank" aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="yellow" />
        <IconButton as="a" href="https://twitter.com" target="_blank" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="yellow" />
        <IconButton as="a" href="https://instagram.com" target="_blank" aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="yellow" />
      </HStack>
    </VStack>
  </Box>
);

const Footer = () => (
  <Box as="footer" py={4} borderTop="1px" borderColor="#FFCA0C" textAlign="center">
    <Text>&copy; {new Date().getFullYear()} Magic Print Production. All rights reserved.</Text>
  </Box>
);

export default Index;
