import { ButtonGroup, Button } from "@shopify/polaris";

type TProps = {
  id: number;
};

export const GroupHomeButton: React.FC<TProps> = ({ id }) => {
  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleClone = () => {};
  return (
    <ButtonGroup>
      <Button primary onClick={handleEdit}>
        Edit
      </Button>
      <Button outline destructive onClick={handleDelete}>
        Delete
      </Button>
      <Button outline onClick={handleClone}>
        Clone
      </Button>
    </ButtonGroup>
  );
};
