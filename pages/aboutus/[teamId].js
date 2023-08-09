// our domain.com/aboutus/teamId

import { useRouter } from "next/router";

function ABOUTPAGE() {
  const router = useRouter();

  const teamId = router.query.teamId;
  // console.log("teamid", teamId);

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const teamData = details.find((item) => item.id === Number(teamId));
  // console.log("data", teamData);
  return (
    <div>
      {/* {console.log("teamdata", teamData)} */}
      {teamData && (
        <h1>
          {teamData.name} - {teamData.role}
        </h1>
      )}
      {!teamData && <h1>Developer doesn't exist</h1>}
    </div>
  );
}

export default ABOUTPAGE;
