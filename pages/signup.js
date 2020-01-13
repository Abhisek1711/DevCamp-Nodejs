import Layout from "../components/Layout";
import SignupComponent from "../components/auth/Signupcomponent";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <h2 className="text-center pt-4 pb-4">Please Signup Here</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <SignupComponent />
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
