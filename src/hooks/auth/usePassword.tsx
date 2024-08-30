import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const Icon = visible ? (
    <EyeIcon className="size-6 cursor-pointer ease-in-out text-gray-500" onClick={() => setVisible(prevVisible => !prevVisible)} />
  ) : (
    <EyeSlashIcon className="size-6 cursor-pointer ease-in-out text-gray-500" onClick={() => setVisible(prevVisible => !prevVisible)} />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default usePasswordToggle;
