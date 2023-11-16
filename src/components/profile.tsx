import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  return (
    <Avatar className="h-16 w-16 ">
      <AvatarImage src="/profile-pic.jpg" />
      <AvatarFallback>SE</AvatarFallback>
    </Avatar>
  );
};

export default Profile;
