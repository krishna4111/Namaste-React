import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  //check is online
  useEffect(() => {
    window.addEventListener("online", () => {
      console.log("use is online");
      setOnlineStatus(true);
    });

    window.addEventListener("offline", () => {
      console.log("user is offline");
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
