 const TodoActions = ({ row }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditClick = () => {
    handleEdit(row);
    handleClose();
  };

  const handleDeleteClick = () => {
    handleDelete(row.id);
    handleClose();
  };

  const handleMarkDoneClick = () => {
    handleMarkDone(row.id);
    handleClose();
  };

  return (
    <>
      <Button
        aria-controls="actions-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        &#8943;
      </Button>
      <Menu
        id="actions-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
        <MenuItem onClick={handleMarkDoneClick}>Mark as Done</MenuItem>
      </Menu>
    </>
  );
};
