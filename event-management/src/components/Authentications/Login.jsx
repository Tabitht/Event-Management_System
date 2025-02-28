import cancel from "../../assets/cancel.svg";
import background from "../../assets/signUpBackground.jpg";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import CreateAccountOrLoginButton from "../Buttons/CreateAccountOrLoginButton";
import ContinueWithGoogle from "../Buttons/ContinueWithGoogle";
import Navigation from "../Navigation/Navigation";

const Login = () => {
  return (
    <>
      <div
        className="w-full h-[800px] md:h-[1024px] font-raleway flex justify-center items-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="w-[90%] md:w-[70%] py-[1rem] md:h-[828px] bg-white">
          <div className="flex justify-between items-center pt-[1rem] px-[0.5rem] md:px-[1rem]">
            <p className="font-pattaya text-[#412234] text-[1.25rem] md:text-[2rem]">
              Tickety
            </p>
            <img className="w-[10%]" src={cancel} />
          </div>
          <div className="flex flex-col gap-[1.5rem] md:gap-[3rem] px-[2rem] md:px-[4rem] text-start">
            <div>
              <p className="text-[1rem] md:text-[1.5rem] font-bold text-[#131B22]">
                Welcome Back !
              </p>
              <p className="text-[0.75rem] md:text-[1rem] text-[#586675]">
                Kindly input your details below to log into your account
              </p>
            </div>
            <InputField
              title="Email"
              type="email"
              placeholder="Enter your email address"
            />
            <PasswordField title="Password" placeholder="Enter your password" />
            <p className="font-bold">Forgot password?</p>
            <CreateAccountOrLoginButton text="Log into Account" link="/Home" />
            <ContinueWithGoogle />
            <div className="flex justify-center gap-[3px] text-center">
              <p className=" text-[1rem] text-[#412234] text-center">
                Don`t have an account?{" "}
              </p>
              <p className="text-[1rem] text-[#412234] font-bold">
                <Navigation
                  link="/SignUp"
                  label="Create an Account"
                ></Navigation>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
