import { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    username: "Animesh",
    college: "IEM",
    email: "paluianimesh31@gmail.com",
    score: 9.5,
    address: {
      city: "Kolkata",
      country: "India",
      pinCode: 712613,
    },
  });

  const handleUpdate = () => {
    setUser({
      ...user,
      username: "Animesh Palui",
      score: 9.99,

      address: {
        ...user.address,
        city: "Delhi",
        pinCode: 700000,
      },
    });
  };

  return (
    <div className="min-h-[10%] text-gray-300 bg-white/10 flex flex-col items-center min-w-[50%] py-8 rounded-2xl px-5 space-y-5">
      <h2>This is UserProfile</h2>
      <p>
        {user.username} from {user.college} has scored {user.score} will be
        available on {user.email} and address is {user.address.city} and pinCode
        is {user.address.pinCode} and country is {user.address.country}
      </p>
      <button
        onClick={handleUpdate}
        className="px-5 py-2 rounded-xl bg-indigo-700 cursor-pointer hover:bg-indigo-950 hover:text-white hover:translate-y-0.75"
      >
        Update Details
      </button>
    </div>
  );
};
