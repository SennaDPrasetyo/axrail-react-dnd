import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import SortableRow from "./SortableRow";
import {
  Box,
  Table,
  TableCaption,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const TableContent = ({ id, title, items }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <Box ref={setNodeRef} width={"100%"}>
      <SortableContext items={items.map((item) => item.id)}>
        <Box borderRadius="8px" border="1px solid rgb(207, 207, 207)">
          <Table variant="striped" colorScheme="teal" width="100%">
            <TableCaption>{title}</TableCaption>
            <Thead>
              <Tr>
                <Th>Item</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items.map((item) => (
                <SortableRow key={item.id} item={item} containerId={id} />
              ))}
            </Tbody>
          </Table>
        </Box>
      </SortableContext>
    </Box>
  );
};

export default TableContent;
