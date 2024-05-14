import LoginButton from "./LoginButton";
import ModalLogin from "./ModalLogin";
import ModalSignup from "./ModalSignup";
import SignUpButton from "./SignUpButton";

const Header = () => {
  return (
    <div className="hero h-[40%] relative">
      <img
        src="bled-2582655_1920.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="hero-content text-center z-10 relative">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to Helpateer</h1>
          <p className="py-6">
            We are a team of people that want to motivate folks to help elderly.
            Join Up on our mission to better the World!
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div className="grid grid-cols-2 grid-rows-1">
            <LoginButton />
            <div className=" fixed">
              <ModalLogin />
            </div>
            <SignUpButton />
            <div className="fixed">
              <ModalSignup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
