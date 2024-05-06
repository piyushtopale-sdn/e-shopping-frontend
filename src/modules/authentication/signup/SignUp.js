import React, {} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom"
import "./SignUp.css"
const initialValues = {
	username: "",
	email: "",
	password: "",
	gender: "",
};

const validationSchema = Yup.object({
	username: Yup.string().required("Required").max(50),
	password: Yup.string()
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		)
		.required("Required")
		.max(10),
	cpassword: Yup.string()
		.when("password", {
			is: (val) => (val && val.length > 0 ? true : false),
			then: Yup.string().oneOf(
				[Yup.ref("password")],
				"Both password need to be the same"
			),
		})
		.required("Required"),
	email: Yup.string().email().required("Required"),
	gender: Yup.string().required("Required"),
});

function SignUP() {
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			console.log("🚀 ~ file: RegisterPage.js ~ line 45 ~ onSubmit: ~ values",values);


			// const res = await sendRequest(
			// 	`${process.env.REACT_APP_DOMAIN_URL}/api/user/registerUser`,
			// 	"POST",
			// 	values
			// );
			// console.log("register res>>>>>>", res);
			// if (res.data) {
			// 	var ls = new SecureLS({ encodingType: "aes" });
			// 	ls.set("user", res.data);
			// 	ls.set("token", `Bearer ${res.data.token}`);
			// 	ls.set("role", res.data?.role);
			// 	ls.set("redirectchat", res.data?.isCardSave);

			// 	toast.success('Register Successfully')
			// 	navigate("/landingpage");
			// }

		},
	});
	const maleClicked = () => {
		values.gender = "male";
		handleChange();
	};
	const femaleClicked = () => {
		values.gender = "female";
		handleChange();
	};
	return (
		<div>
			<div />
			<div>
				<div>
					<form
						action="#"
						onSubmit={handleSubmit}
					>
						<h1>Sign Up</h1>
						<span>User Name</span>
						<input
							name="username"
							type="text"
							placeholder="User Name"
							value={values.username}
						//   onChange={handleChange}
						/>
						{errors.username ? (
							<span>{errors.username}</span>
						) : null}

						<span>Email</span>
						<input
							name="email"
							type="email"
							placeholder="Email"
							value={values.email}
						//   onChange={handleChange}
						/>
						{errors.email ? (
							<span>{errors.email}</span>
						) : null}

						<span>Password</span>
						<input
							name="password"
							type="password"
							placeholder="Password"
							autoComplete="off"
							value={values.password}
						//   onChange={handleChange}
						/>
						{errors.password ? (
							<span>{errors.password}</span>
						) : null}

						<span>Confirm Password</span>
						<input
							name="cpassword"
							type="password"
							placeholder="Confirm Password"
							autoComplete="off"
							value={values.cpassword}
							onChange={handleChange}
						/>
						{errors.cpassword ? (
							<span>{errors.cpassword}</span>
						) : null}

						<span>Gender</span>
						<div
						>
							<div>
								<input
									type="radio"
									name="gender"
									value={values.gender}
									onChange={maleClicked}
								/>
								Male
							</div>
							<div>
								<input
									type="radio"
									name="gender"
									value={values.gender}
									onChange={femaleClicked}
								/>
								Female
							</div>
						</div>
						{errors.gender ? (
							<span>{errors.gender}</span>
						) : null}

						<div>
							Already have account :
							<Link to="/login">
								Click here
							</Link>
						</div>

						<div>
							<button type="submit" title="Register" >Submit</button>
						</div>
					</form>
				</div>

				<div>
					<div>
						<div>
							<h1>Hello, Friend!</h1>

							<p >
								Enter your personal details and start journey with us-{" "}
								<Link to="/login">Click here</Link>
							</p>
						</div>
						<div />
					</div>
				</div>
			</div>
		</div>
	);
}
export default SignUP;