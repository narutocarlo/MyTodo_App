import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';

const AddTodoDialog = ({ open, onClose, onAddTodo }) => {
  const initialValues = {
    name: '',
    description: '',
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add Todo</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            onAddTodo(values);
            handleClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <DialogContentText>Please enter the details of the new todo:</DialogContentText>
              <Box marginBottom={"20px"} >

              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                required
                
              />
              </Box>
              <Field
                as={TextField}
                name="description"
                label="Description"
                fullWidth
              />
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary" disabled={isSubmitting}>
                  Add
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoDialog;
