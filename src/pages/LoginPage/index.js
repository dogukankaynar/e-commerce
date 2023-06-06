import { useEffect } from "react";
import { useFormik } from "formik";
import validationSchema from "../../components/FormComponents/LoginValidation";
import Input from "../../components/FormComponents/Input";
import Button from "../../components/FormComponents/Button";
import { useNavigate } from "react-router-dom";
import { allProductList } from "../../context/ProductContext";

function LoginPage() {
  const { cookies, setCookie } = allProductList();
  const ADMİN = {
    email: "admin@gmail.com",
    password: "12345",
  };
  const navigate = useNavigate();
  const initialValues = {
    id: new Date().getTime(),
    email: "",
    password: "",
  };

  useEffect(() => {
    cookies.isLoggin === "true" && navigate("/product");
  }, [cookies.isLoggin]);

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        if (
          values.email === ADMİN.email &&
          values.password === ADMİN.password
        ) {
          setCookie("isLoggin", true);
        } else {
          alert("kullanıcı adı veya şifre hatalı");
        }
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
