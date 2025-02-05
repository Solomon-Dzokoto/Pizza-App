import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/reducers/AuthReducer";
import type { RootState, AppDispatch } from "../../redux/store/store";

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, resetEmailSent } = useSelector((state: RootState) => state.auth);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        dispatch(resetPassword(data.email));
    };

    return (
        <div className="border-2 shadow-lg rounded-md max-w-[30vw] min-w-[35vw] border-[#BB3E00] p-8">
            <h2 className="text-[1.5rem] mb-2 text-center">Forgot Password? 🤦‍♂️ </h2>
            {resetEmailSent ? (
                <p className="text-green-500">A password reset link has been sent to your email.</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} className="border p-2 mb-2 outline-[#BB3E00] border-gray-400  w-full rounded-md " placeholder="Enter your email" />
                    {errors.email && <small className="text-red-500 block">{errors.email.message}</small>}
                    <button className="border-2 flex items-center justify-center gap-2 bg-[#BB3E00] w-full text-white cursor-pointer  font-semibold py-2 px-4 rounded-md mt-4" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Reset Password"}
                    </button>
                    {error && <small className="text-red-500">{error}</small>}
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;