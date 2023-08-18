import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const servers = [
  { id: 1, name: "Feed0 Official", members: 123, imageUrl: "/Doraemon.png" },
  { id: 2, name: "UIT, BU", members: 456, imageUrl: "server2.jpg" },
  { id: 3, name: "Server 3", members: 789, imageUrl: "server3.jpg" },
  // ... add more servers
];

function SidebarLeft() {
  return (
    <div className=" w-full h-screen  text-white">
      <div className="space-y-4">
        {servers.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>
    </div>
  );
}

function ServerCard({ server }) {
  return (
    <div className="flex items-center bg-gray-700 rounded-xl p-2 cursor-pointer hover:bg-gray-600">
      <img
        className="w-10 h-10 rounded-lg object-cover mr-2"
        src={server.imageUrl}
        alt={`Server ${server.name}`}
      />
      <div className="flex-grow">
        <div className="font-medium">{server.name}</div>
        <div className="text-gray-400 text-sm">{server.members} Members</div>
      </div>
      <span className="text-lg">
        <BsThreeDotsVertical />
      </span>
    </div>
  );
}

export default SidebarLeft;
