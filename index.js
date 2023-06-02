// 1 - needs to have node.js
// 2 - read json file, turn into object
// 3 - profit

const membersInfo = 
[{
  "user-id": "usuario1",
  "name": "Nome do Nomedomeio Sobrenome",
  "quote": "Frase de impacto, inspiracional, ou que defina o membro",
  "socials": {
    "github": "githublink",
    "linkedin": "linkedinlink",
    "facebook": "facebooklink",
    "instagram": "instagramlink",
    "gmail": "gmaillink",
    "other": "otherlink"
  }
},
{
  "user-id": "usuario2",
  "name": "Outronome do Outronomedomeio Outrosobrenome",
  "quote": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis a eligendi natus non, qui hic dicta earum pariatur cupiditate, illum iure error voluptatum deserunt nemo esse! Iure incidunt pariatur modi laborum inventore iusto libero dicta accusamus ipsa, esse voluptatibus doloribus suscipit dolore quisquam voluptatem dolorum!",
  "socials": {
    "github": "githublink",
    "linkedin": "linkedinlink",
    "facebook": "facebooklink",
    "instagram": "instagramlink",
    "gmail": "gmaillink"
  }
},
{
  "user-id": "usuario3",
  "name": "---- -----",
  "quote": " ",
  "socials": {
    "github": "githublink",
    "linkedin": "linkedinlink",
    "discord": "discordlink",
    "gmail": "gmaillink",
    "other": "otherlink"
  }
}]
let allTeamArea = document.querySelector("#AllTeamMembers");
console.log(membersInfo[0])

let createTag = (elementType, parentEl, className, idName="")=>{
  let result = document.createElement(`${elementType}`);
  result.setAttribute("class", `${className}`);
  result.setAttribute("id", `${idName}`);
  parentEl.appendChild(result);
  return result;
}
membersInfo.forEach(member=>{
  let memberArea = createTag("div", allTeamArea, "member-area")
  let memberIndex = membersInfo.indexOf(member)
  if (memberIndex % 2 != 0) memberArea.setAttribute("data-member-parity", "even")
})