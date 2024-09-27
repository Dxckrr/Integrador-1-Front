// useLoginCard.js
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../schemas/loginSchema";
import { useAuth } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { roles } from "../../utils/data/roles";
import { useState, useEffect } from "react";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const { signinContext, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [errorOnResponse, setErrorOnResponse] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      setLoading(true);
      const response = await signinContext(data);
      if (response.user.idRol === roles.USER) {
        window.location.reload();
      } else {
        // navigate(response.responseModule[1].link);
      }
    } catch (e) {
      console.error(e);
      setErrorOnResponse(true);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorOnResponse(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [errorOnResponse]);

  return {
    register,
    errors,
    onSubmit,
    loading,
    errorOnResponse,
  };
};
