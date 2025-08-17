import { useState, useEffect } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup when component unmounts
  }, []);

  return <div className="">{time.toLocaleTimeString()}</div>;
}

export default CurrentTime;
