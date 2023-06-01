import { useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../FormComponents/LoginValidation";
import Input from "../FormComponents/Input";
import Button from "../FormComponents/Button";




function LoginPage() {

  const ADMİN ={
    email:"dogukan@gmail.com",
    password:"1234"
  }



  const [initialValues, setInitialValues] = useState({
    id: new Date().getTime(),
    email: "",
    password: "",
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        console.log(values.email===ADMİN.email);////-----BURDAKALDIM
        console.log("calistim");
      },
      validationSchema: validationSchema,
    });

  return (
    <div className="login-page">
      <form className="flex-column form" onSubmit={handleSubmit}>
        <label className="text-label">E-MAIL</label>
        <Input
          name={"email"}
          value={values.email}
          onchange={handleChange}
          onblur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error-message">{errors.email}</div>
        )}
        <label className="text-label">PASSWORD</label>
        <Input
         name={"password"}
          value={values.password}
          onchange={handleChange}
          onblur={handleBlur}
          type={"password"}
         />
           {errors.password && touched.password && (
          <div className="error-message">{errors.password}</div>
        )}
        <Button type={"submit"} />
      </form>
    </div>
  );
}

export default LoginPage;
