import { Td, Tr } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";

const SortableRow = ({ item, containerId }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({
      id: item.id,
      data: { containerId },
    });

  return (
    <Tr
      padding={"3rem"}
      ref={setNodeRef}
      transform={
        transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined
      }
      transition={transition}
      {...attributes}
      {...listeners}
    >
      <Td>{item.text}</Td>
    </Tr>
  );
};

export default SortableRow;
