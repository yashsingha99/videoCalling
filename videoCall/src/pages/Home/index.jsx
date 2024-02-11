import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [value, setValue] = useState();


  const navigate = useNavigate()


  const handleSubmit = useCallback(()=>{
    navigate(`/room/${value}`)
  }, [navigate, value])

  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Room Code"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{" "}
      <button onClick={handleSubmit}> Join</button>
    </div>
  );
}

export default HomePage;
