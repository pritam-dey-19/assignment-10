function searchEmoji() {
  tableRows.innerHTML = " ";
  const input = document.getElementById("input").value;

  const tagsArray = [];

  emojiList.map((e) => {
    const tags = e.tags;

    if (tags.includes(input)) {
      tagsArray.push(e);

      const tableRows = document.getElementById("tableRows");

      tableRows.innerHTML += `
            <td id="emojiIcon">${e.emoji}</td>
                <td id="emojiName">${e.aliases}</td>
                <td id="emojiTags">${e.description}</td>
            `;
    }
  });
  console.log(tagsArray);
}

function searchEmojiKeyup() {
  tableRows.innerHTML = " ";
  const input = document.getElementById("input").value;

  if (input != "") {
    const tagsArray = [];

    emojiList.map((e) => {
      const tags = e.tags;

      tags.map((element) => {
        if (element.startsWith(input)) {
          tagsArray.push(e);

          const tableRows = document.getElementById("tableRows");

          tableRows.innerHTML += `
                    <td id="emojiIcon">${e.emoji}</td>
                        <td id="emojiName">${e.aliases}</td>
                        <td id="emojiTags">${e.description}</td>
                    `;
        }
      });
    });
  }
}
Footer;
