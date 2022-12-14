import { Field, Form } from "react-final-form";
import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { validationToDoForm } from "./helpers";

type AddToDoFormProps = { onSubmit: (body: { inputToDo: string }) => void };

const AddToDoForm = ({ onSubmit }: AddToDoFormProps) => {
  const inputAnchor = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputAnchor.current) {
      inputAnchor.current.focus();
    }
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      validate={(values: { inputToDo: string }) => validationToDoForm(values)}
      render={({
        handleSubmit,
        submitting,
        pristine,
        hasSubmitErrors,
        modifiedSinceLastSubmit,
        hasValidationErrors,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field name="inputToDo">
              {(props) => (
                <Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <label htmlFor="inputToDo">
                      <Typography variant="subtitle1" textTransform="uppercase">
                        новая задача
                      </Typography>
                    </label>
                    <Box mt={1}>
                      <TextField
                        {...props.input}
                        id="inputToDo"
                        size="small"
                        variant="outlined"
                        placeholder="введите текст"
                        inputRef={inputAnchor}
                        disabled={submitting}
                        error={props.meta.touched && props.meta.invalid}
                        helperText={
                          props.meta.touched &&
                          (props.meta.error || props.meta.submitError)
                        }
                      />
                    </Box>
                  </Box>
                  <Box mt={1} textAlign="center">
                    <Button
                      type="submit"
                      disabled={
                        hasValidationErrors ||
                        submitting ||
                        pristine ||
                        (hasSubmitErrors && !modifiedSinceLastSubmit)
                      }
                      size="small"
                      color="primary"
                      variant="contained"
                    >
                      <Typography variant="body1">добавить</Typography>
                    </Button>
                  </Box>
                </Box>
              )}
            </Field>
          </form>
        );
      }}
    />
  );
};

export default AddToDoForm;
