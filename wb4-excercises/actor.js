let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
   2-24
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   for(let i = 0; i < academyMembers.length; i++) {
    const member = academyMembers [i];
   console.log(member);
   }

  for (const member of academyMembers) {
   console.log(member);
   }

   function getMemberById(member, memberId) {
   for (const member of members) {
  if (member.momId == memberId) {
    return 'The member with id: ${memberId} is ${member.name}' ;
  }


   }
    return {name: "Jamar Sherrill, memID: 187"};
   }

  let matchingMember = getMemberById(academyMembers, 187);
  console.log(matchingMember.name);