import { useEffect } from "react";
import axios from 'axios'
import { useForm } from "react-hook-form";
const Folder = () => {
  const {handleSubmit  ,register } =useForm()
  const onSubmit = async (formData) => {
    await axios
      .post("https://todo-task-iti.onrender.com/api/v1/auth/signUp" , formData)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    // getAllUsers();
  }, []);
  return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4  w-[50%] mx-auto">
    <label htmlFor="name">name</label>
    <input type="text" placeholder="user name" {...register("name", { required: true })}/>
    <label htmlFor="email">email</label>
    <input type="text" placeholder="user email" {...register("email", { required: true })}/>
    <label htmlFor="password">password</label>
    <input type="text" placeholder="user password" {...register("password", { required: true })}/>
    <label htmlFor="id">id</label>
    <input type="text" placeholder="user id" {...register("id", { required: true })}/>
    <button className="" type="submit">submit</button>
  </form>;
};

export default Folder;
