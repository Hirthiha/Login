import React, { useState } from "react";

export const Password = () => {
  const [passwordvisibility, setPasswordvisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordvisibility(!passwordvisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordvisibility(!passwordvisibility);
    }
  };

  return {
    passwordvisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
