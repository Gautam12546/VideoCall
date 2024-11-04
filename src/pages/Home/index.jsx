import React,{useCallback,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Common/Footer';


const HomePage = () => {
    const [value,setValue] = useState();
    const navigate = useNavigate();

    const handleJoinRoom = useCallback(()=>{
        navigate(`/room/${value}`);
    },[navigate,value]);

  return (
    <div className="flex flex-col min-h-screen">
    {/* Main Content */}
    <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Join a Room</h2>
            <input
                type="text"
                placeholder="Enter Room Code"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
            <button
                onClick={handleJoinRoom}
                className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200"
            >
                Join
            </button>
        </div>
    </div>

    {/* Footer (Sticky to Bottom) */}
    <Footer />
</div>
  )
}

export default HomePage;
