// 1 - needs to have node.js
// 2 - read json file, turn into object
// 3 - profit

const loadInfo = async (cb) => {
  fetch('./membersInfo.json')
    .then((response) => response.json())
    .then((json) => {
      cb(json);
    });
};
let allTeamArea = document.querySelector('#AllTeamMembers');
let createTag = (elementType, parentEl, className, idName) => {
  let result = document.createElement(`${elementType}`);
  result.setAttribute('class', `${className}`);
  result.setAttribute('id', `${idName}`);
  parentEl.appendChild(result);
  return result;
};
loadInfo((membersInfo) => {
  membersInfo.forEach((member) => {
    let memberArea = createTag('div', allTeamArea, 'member-area', 'memberArea');
    let memberIndex = membersInfo.indexOf(member);
    if (memberIndex % 2 != 0) memberArea.setAttribute('data-member-parity', 'even');

    let memberStatic = createTag('div', memberArea, 'member-static', 'memberStatic');
    let memberPfp = createTag('img', memberStatic, 'member-pfp', 'memberPfp');
    fetch(`./assets/${member.userId}.jpg`)
      .then((img) => {
        if (img.ok) {
          memberPfp.setAttribute('src', `./assets/${member.userId}.jpg`);
        } else {
          memberPfp.setAttribute('src', `./assets/blank.jpg`);
        }
      })
      .catch((err) => console.log('error: ', err));
    let memberName = createTag('h2', memberStatic, 'member-name', 'memberName');
    memberName.innerText = member.name;

    let memberDynamic = createTag('div', memberArea, 'member-dynamic', 'memberDynamic');
    let memberQuote = createTag('p', memberDynamic, 'member-quote', 'memberQuote');
    memberQuote.innerText = member.quote;
    let memberSocials = createTag('div', memberDynamic, 'member-socials', 'memberSocial');
    if (memberIndex % 2 != 0) memberSocials.setAttribute('data-member-parity', 'even');
    socialKeys = Object.keys(member.socials);
    socialKeys.forEach((key) => {
      let socialIcon = createTag('a', memberSocials, 'social-icon', 'socialIcon');
      socialIcon.setAttribute('href', `${member.socials[key]}`);
      socialIcon.setAttribute('target', '_blank');
      let socialIconImg = createTag('img', socialIcon, 'social-icon-img', 'socialIconImg');
      socialIconImg.setAttribute('src', `./assets/${key}-logo.png`);
      socialIconImg.setAttribute('alt', `${key}`);
    });
  });
});
