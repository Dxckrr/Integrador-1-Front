// useLoginCard.js
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../../schemas/loginSchema";
import { useAuth } from "../../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { roles } from "../../utils/data/roles";
import { useState, useEffect } from "react";
import { User, UserLogin } from "../../types/auth/UserLogin";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: zodResolver(userSchema),
  });
  const { signinContext, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const [errorOnResponse, setErrorOnResponse] = useState(false);

  const onSubmit = handleSubmit(async (data: UserLogin) => {
    try {
      console.log(data);
      setLoading(true);
      const response: User = await signinContext(data);
      console.log(response, " -");
      if (response.idRol === roles.USER) {
        navigate("/citas")
      }
      if(response.idRol === roles.OPERATOR) {
        navigate("/management")
      }
      if(response.idRol === roles.MEDIC) {
        navigate("/especialista")
      }
      if(response.idRol === roles.ADMIN) {
        navigate("/admin")
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
