# Olga Smirnova

# My Contact Info:

- **Phone:** +7 999 999 99 99
- **E-mail:** [almazkacode@gmail.com](almazkacode@gmail.com)
- **GitHub:** [almazka-code](https://github.com/almazka-code)
- **Discord:** almazka(@almazka-code)

# About Me

I am an experienced finance professional transitioning to a promising career in programming. With seven years of expertise in finance, I have developed strong analytical and problem-solving skills that will greatly benefit my career in Frontend Development. I have always been drawn to mathematics, which is evident from my Pascal courses at school and studying computer science at the institute to create websites. Now, I am eager to leverage my knowledge and determination to excel in the field of Frontend Development, where I can contribute my creative mindset and technical aptitude to deliver engaging and user-friendly web experiences.

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
