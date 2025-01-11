import { DndContext } from "@dnd-kit/core";
import "./App.css";
import React, { useState } from "react";
import TableContent from "./components/TableContent";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App() {
  const [containers, setContainers] = useState({
    containerOne: [
      { id: "1", text: "Sales Cloud" },
      { id: "2", text: "Service Cloud" },
      { id: "3", text: "Community Cloud" },
    ],
    containerTwo: [{ id: "4", text: "Wave Analytics" }],
  });

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over?.id) {
      const sourceContainer = active.data.current.containerId;
      const destinationContainer = over.id;

      if (sourceContainer !== destinationContainer) {
        const sourceItems = [...containers[sourceContainer]];
        const destinationItems = [...containers[destinationContainer]];

        const activeItemIndex = sourceItems.findIndex(
          (item) => item.id === active.id
        );
        const [activeItem] = sourceItems.splice(activeItemIndex, 1);

        destinationItems.push(activeItem);

        setContainers((prev) => ({
          ...prev,
          [sourceContainer]: sourceItems,
          [destinationContainer]: destinationItems,
        }));
      }
    }
  };

  return (
    <ChakraProvider>
      <Box className="App">
        <DndContext onDragEnd={handleDragEnd}>
          <Box style={{ display: "flex", gap: "2rem", width: "50%" }}>
            <TableContent
              id="containerOne"
              title="Table 1"
              items={containers.containerOne}
            />
            <TableContent
              id="containerTwo"
              title="Table 2"
              items={containers.containerTwo}
            />
          </Box>
        </DndContext>
      </Box>
    </ChakraProvider>
  );
}

export default App;
