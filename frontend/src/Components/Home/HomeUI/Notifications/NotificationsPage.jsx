import React from "react";
import { FaBell, FaUser, FaComment } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    text: "Feed0 liked your post.",
    icon: <FaBell className="text-blue-500" />,
  },
  {
    id: 2,
    text: "Emily commented on your photo.",
    icon: <FaComment className="text-green-500" />,
  },
  {
    id: 3,
    text: "Feed0 Updated to v1.1",
    icon: <FaUser className="text-purple-500" />,
  },
  // Add more notifications here
];

function NotificationsPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-6 shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
        <ul>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer"
            >
              <div className="text-2xl">{notification.icon}</div>
              <div>
                <p className="text-gray-700">{notification.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationsPage;
