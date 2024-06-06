import { useState } from "react";
import { Container, Text, VStack, HStack, Button, Box, Input, IconButton, Image, List, ListItem, ListIcon, Divider } from "@chakra-ui/react";
import { FaLeaf, FaRecycle, FaTree, FaBook, FaShoppingCart, FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");

  const addActivity = () => {
    if (newActivity.trim() !== "") {
      setActivities([...activities, newActivity]);
      setNewActivity("");
      setCarbonFootprint(carbonFootprint + 1); // Simplified impact calculation
    }
  };

  const removeActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
    setCarbonFootprint(carbonFootprint - 1); // Simplified impact calculation
  };

  return (
    <Container centerContent maxW="container.md" py={8} bgImage="url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXJlc3QlMjBmb3Jlc3R8ZW58MHx8fHwxNjg2MDY0MTYw&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPosition="center" color="white">
      <VStack spacing={8} width="100%">
        <Text fontSize="3xl" fontWeight="bold" fontFamily="heading">
          EcoNet: The Environmental Impact Network
        </Text>

        <Box width="100%">
          <Text fontSize="2xl" mb={4} fontFamily="heading">
            Carbon Footprint Tracker
          </Text>
          <HStack>
            <Input placeholder="Log an eco-friendly activity" value={newActivity} onChange={(e) => setNewActivity(e.target.value)} />
            <IconButton aria-label="Add activity" icon={<FaPlus />} onClick={addActivity} />
          </HStack>
          <List spacing={3} mt={4}>
            {activities.map((activity, index) => (
              <ListItem key={index}>
                <HStack justifyContent="space-between">
                  <Text>{activity}</Text>
                  <IconButton aria-label="Remove activity" icon={<FaTrash />} onClick={() => removeActivity(index)} />
                </HStack>
              </ListItem>
            ))}
          </List>
          <Text mt={4}>Total Carbon Footprint: {carbonFootprint}</Text>
        </Box>

        <Divider />

        <Box width="100%">
          <Text fontSize="2xl" mb={4} fontFamily="heading">
            Eco Challenges
          </Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaRecycle />} colorScheme="green">
              Reduce Plastic Use
            </Button>
            <Button leftIcon={<FaTree />} colorScheme="green">
              Plant a Tree
            </Button>
          </HStack>
        </Box>

        <Divider />

        <Box width="100%">
          <Text fontSize="2xl" mb={4} fontFamily="heading">
            Community Projects
          </Text>
          <VStack spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
              <Text fontSize="lg" fontWeight="bold" fontFamily="heading">
                Beach Cleanup
              </Text>
              <Text>Join us for a beach cleanup event this weekend.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
              <Text fontSize="lg" fontWeight="bold" fontFamily="heading">
                Tree Planting Drive
              </Text>
              <Text>Help us plant trees in the local park.</Text>
            </Box>
          </VStack>
        </Box>

        <Divider />

        <Box width="100%">
          <Text fontSize="2xl" mb={4} fontFamily="heading">
            Educational Content
          </Text>
          <VStack spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
              <Text fontSize="lg" fontWeight="bold" fontFamily="heading">
                Sustainability 101
              </Text>
              <Text>Learn the basics of sustainable living.</Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
              <Text fontSize="lg" fontWeight="bold" fontFamily="heading">
                Eco-Friendly Tips
              </Text>
              <Text>Discover simple tips to reduce your environmental impact.</Text>
            </Box>
          </VStack>
        </Box>

        <Divider />

        <Box width="100%">
          <Text fontSize="2xl" mb={4} fontFamily="heading">
            Green Marketplace
          </Text>
          <HStack spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
              <Text fontSize="lg" fontWeight="bold">
                Eco-Friendly Products
              </Text>
              <Text>Shop for sustainable products.</Text>
              <Image src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlY28tZnJpZW5kbHklMjBwcm9kdWN0c3xlbnwwfHx8fDE3MTc2NDExNzB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Eco-Friendly Products" mt={2} />
            </Box>
            <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
              <Text fontSize="lg" fontWeight="bold">
                Green Services
              </Text>
              <Text>Find services that support a green lifestyle.</Text>
              <Image src="https://images.unsplash.com/photo-1554769945-af468c934022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHNlcnZpY2VzfGVufDB8fHx8MTcxNzY0MTE3MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Green Services" mt={2} />
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
