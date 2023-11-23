import { useForm } from "react-hook-form";
import axios from "axios";
const Login = () => {
  const { handleSubmit, reset, register } = useForm();

  const onSubmit = async (formData) => {
    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/login` , formData)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="w-full h-screen bg-[#141b38] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40%] h-[40%] bg-blue-600 rounded-2xl shadow-xl flex flex-col gap-5 justify-center items-center"
      >
        <div className="">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="enter your email"
            className="placeholder:ms-4 py-2 px-4 outline-none"
          />
        </div>
        <div className="">
          <label htmlFor="password">password</label>
          <input
            {...register("password", { required: true })}
            type="text"
            placeholder="enter your password"
            className="placeholder:ms-4 py-2 px-4 outline-none"
          />
        </div>
        <div>
          <button className="" type="submit"> LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
