import React, { useCallback } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

const ProfileForm = () => {
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Le nom est requis"),
    about: Yup.string().required("La phrase de présentation est requise"),
    avatarUrl: Yup.string().required("L'avatar est requis").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      console.log("Data", data);
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack spacing={3}>
          {!!errors.afterSumbit && (
            <Alert severity="error">{errors.afterSumbit.message}</Alert>
          )}
          <RHFTextField
            name="name"
            label="Nom"
            helperText={"Ce nom sera visible par vos contacts"}
          />
          <RHFTextField
            multiline
            rows={3}
            maxRows={5}
            name="about"
            label="Présentation"
          />
        </Stack>
        <Stack direction="row" justifyContent="end">
          <Button color="primary" size="large" type="submit" variant="outlined">
            Enregistrer
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
