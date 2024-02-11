import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
  const { roomId } = useParams();
  const myMeeting = async (e) => {
    const appId = "1161611486";
    const ServerSecret = "5a11ba7ebada5823b57dfd8450fe36d8";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      appId,
      ServerSecret,
      roomId,
      Date.now().toString(),
      "yash singhal"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
        container:e,
        sharedLinks:[
            {
                name:'Copy Link',
                url:`http://localhost:5173/room/${roomId}`
            }
        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton:false,
    })
  };

  return(
  <div>
    <div ref={myMeeting}/>
  </div>
  );
}

export default Room;
