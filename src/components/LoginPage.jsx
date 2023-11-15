import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { login } = useContext(Context);
	const { setUser } = useContext(Context);
	const navigate = useNavigate();

	const onSubmit = (data) => {
		login();
		console.log(data);
		setUser(data);

		const lastPath = localStorage.getItem("lastPath") || "/";
		navigate(lastPath, {
			replace: true,
		});
	};

  return (
    <div>
        <h1>Logeate</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("user")} />

				<input {...register("password", { required: true })} />
				{errors.exampleRequired && <span>This field is required</span>}

				<input type="submit" />
			</form>
    </div>
  )
}
