import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Footer from '../../components/Common/Footer';

const RoomPage = () => {
    const { roomId } = useParams();
    const meetingRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            const appID = 2126015144;
            const serverSecret = "d91ca7a55687118eb5739e3c05759e3d";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomId,
                Date.now().toString(),
                "Abhay Singh"
            );

            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: meetingRef.current,
                sharedLinks: [{
                    name: 'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`
                }],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
            });
        };

        myMeeting();
    }, [roomId]);

    return (
        <div className="flex flex-col justify-end min-h-screen ">
            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center bg-gray-100 px-4">
                <div
                    ref={meetingRef}
                    className="w-full max-w-3xl h-[80vh] p-4 bg-white rounded-lg shadow-md md:max-w-2xl sm:max-w-xs"
                ></div>
            </div>

            {/* Footer (Sticky to Bottom) */}
            <div  className="py-6 w-full">
            <Footer />
            </div>
            
        </div>
    );
};

export default RoomPage;
