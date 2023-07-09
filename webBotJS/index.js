// const axios = require('axios');
const key = "89d717134cmsh4f1154ea8a49c28p1487f1jsn1c74fec48e30";

async function bot(content) {
  const options = {
    method: "POST",
    url: "https://chatgpt53.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": "chatgpt53.p.rapidapi.com",
    },
    data: {
      messages: [
        {
          role: "user",
          content: content,
        },
      ],
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.choices[0]["message"]["content"];
  } catch (error) {
    return error;
  }
}

// bot('hey').then(response => {
//   console.log(response)
// }).catch(error=>{
//   console.log(error)
// })

const submit = document.querySelector(".btn, btn-primary");
const card_body = document.querySelector(".card-body");

let prompt;
submit.addEventListener("click", (event) => {
  event.preventDefault();
  prompt = document.querySelector("#prompt").value;

  bot(prompt)
    .then((response) => {
      card_body.innerHTML = response;
    })
    .catch((error) => {
      card_body.innerHTML = error;
    });
});
