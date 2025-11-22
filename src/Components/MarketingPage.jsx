import React from "react";
import DepartmentCard from "./CardWithList";

const MarketingPage = () => {
  const members = [
    {
      name: "Wade Warren",
      role: "Sr. Marketing Manager",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Brooklyn Simmons",
      role: "Sr. Marketing Manager",
      avatar: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Kristin Watson",
      role: "Marketing Coordinator",
      avatar: "https://i.pravatar.cc/150?img=30",
    },
    {
      name: "Jacob Jones",
      role: "Marketing Coordinator",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
    {
      name: "Cody Fisher",
      role: "Marketing",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
  ];

  return (
    <div style={{ width: 450, margin: "20px auto" }}>
      <DepartmentCard
        title="Marketing Department"
        membersCount={10}
        members={members}
      />
    </div>
  );
};

export default MarketingPage;
