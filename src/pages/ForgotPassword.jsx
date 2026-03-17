import React, { useState } from "react";
import Forgot from "../components/forgotPass/Forgot";
import Otp from "../components/forgotPass/Otp";
import NewPassword from "../components/forgotPass/NewPassword";

const ForgotPassword = () => {
  const [screen, setShowScreen] = useState("forgot");

  return (
    <div className="pl-[100px]">
      {screen === "forgot" && <Forgot setShowScreen={setShowScreen} />}
      {screen === "otp" && <Otp setShowScreen={setShowScreen} />}
      {screen === "newPassword" && (
        <NewPassword setShowScreen={setShowScreen} />
      )}
    </div>
  );
};

export default ForgotPassword;
