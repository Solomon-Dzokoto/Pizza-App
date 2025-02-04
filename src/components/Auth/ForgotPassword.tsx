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
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        dispatch(resetPassword(data.email));
    };

    return (
        <div>
            <h2 className="text-[1.5rem] ">Forgot Password</h2>
            {resetEmailSent ? (
                <p className="text-green-500">A password reset link has been sent to your email.</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} placeholder="Enter your email" />
                    {errors.email && <p>{errors.email.message}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Reset Password"}
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;