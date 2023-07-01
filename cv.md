# Olga Smirnova

# My Contact Info:

- **Phone:** +7 999 999 99 99
- **E-mail:** [almazkacode@gmail.com](almazkacode@gmail.com)
- **GitHub:** [almazka-code](https://github.com/almazka-code)
- **Discord:** almazka(@almazka-code)

# About Me

I am a Frontend Developer living in Astana, Kazakhstan. I know HTML, CSS (SASS), and JavaScript. My goal is to learn everything new and exciting. I love to code and can spend a lot of time doing what interests me. I am looking forward to working in teams as well as individually. I am ready not only to deepen my knowledge but also to apply it to real products.

# Skills

- HTML
- CSS (Bootstrap, SASS/SCSS, BEM, Flexbox, Grid)
- JavaScript (Fundamentals, ES6+, DOM, Asynchronous JavaScript)
- Git/GitHub/GitLab
- VSCode
- Figma
- Pixel Perfect
- HTML Email

# Code Examples

```
const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://api.thecatapi.com/v1/images/search";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    image.src = data[0].url;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  if (image.complete) {
    fetchHandler();
  }
});
```

# Education

- **State University ESPC**
  - Engineer
- **FreeCodeCamp**
  - [JavaScript Algorithms and Data Structures](https://freecodecamp.org/certification/almazka/javascript-algorithms-and-data-structures)
- **RS School**
  - JavaScript/Front-end. Stage 0 (in progress).
- **Skillbox**
  - Web Development Basic Level
  - Web Development High Level

# Languages

- **Russian** - Native speaker.
- **English** - B1 Intermediate.
