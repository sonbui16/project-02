import { useForm } from "react-hook-form";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return <div>Register Page</div>;
}
export default Register;
