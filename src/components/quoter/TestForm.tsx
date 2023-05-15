import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import submitHubspotForm from "../../utils/submitHubspotForm";

const schema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
  email: yup
    .string()
    .email("Este no es un correo válido")
    .required("Campo requerido"),
  phone: yup.string().required("Campo requerido"),
});

import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "@chakra-ui/react";

export default function TestForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<{ name: string; email: string; phone: string }>({
    delayError: 600,
    resolver: yupResolver(schema),
    mode: "all",
  });
  const onSubmit: SubmitHandler<{
    name: string;
    email: string;
    phone: string;
  }> = async (data) => {
    const { email, phone, name } = data;
    // await submitHubspotForm(
    //   name,
    //   phone,
    //   email,
    //   "24240113",
    //   "3836fc42-4397-4abc-9730-919960d2a1d1"
    // );
    console.log("form submited");
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="quoter-form">
      <div className="quoter-form__input-container">
        <label
          htmlFor="name"
          className="quoter-form__label quoter-form__name-label"
        >
          Nombre*
        </label>
        <input
          id="name"
          {...register("name")}
          className="quoter-form__input quoter-form__name-input"
        />
        <p
          className={`quoter-form__errors quoter-form__name-errors
          ${errors.name == undefined ? "hidden" : ""}
        `}
        >
          {errors.name ? (
            <span>{errors.name.message?.toString()}</span>
          ) : (
            "placeholder"
          )}
        </p>
      </div>

      <div className="quoter-form__input-container">
        <label
          htmlFor="email"
          className="quoter-form__label quoter-form__email-label"
        >
          Correo electrónico*
        </label>
        <input
          {...register("email")}
          id="email"
          className="quoter-form__input quoter-form__email-input"
        />
        <p
          className={`quoter-form__errors quoter-form__email-errors
          ${errors.email == undefined ? "hidden" : ""}
        `}
        >
          {errors.email ? (
            <span>{errors.email.message?.toString()}</span>
          ) : (
            "placeholder"
          )}
        </p>
      </div>

      <div className="quoter-form__input-container">
        <label
          htmlFor="phone"
          className="quoter-form__label quoter-form__phone-label"
        >
          Teléfono*
        </label>
        <input
          {...register("phone")}
          id="phone"
          className="quoter-form__input quoter-form__phone-input"
        />
        <p
          className={`quoter-form__errors quoter-form__phone-errors
          ${errors.phone == undefined ? "hidden" : ""}
        `}
        >
          {errors.phone ? (
            <span>{errors.phone.message?.toString()}</span>
          ) : (
            "placeholder"
          )}
        </p>
      </div>

      {!isSubmitSuccessful ? (
        <Button
          type="submit"
          className="quoter-form__submit-button"
          isLoading={isSubmitting}
        >
          Cotizar!
        </Button>
      ) : (
        <h3 className="quoter-form__submitted-success-text">
          <span className="quoter-form-submitted-success-text-highlight">
            ¡Excelente!
          </span>{" "}
          Tus datos han sido recibidos. Nos pondremos en contacto contigo en
          breve para brindarte toda la información que necesitas.
        </h3>
      )}
    </form>
  );
}
