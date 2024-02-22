// scrolling animation - section skills Intersection Observer API

const options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.5,
};

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('active');
     observer.unobserve(change.target);
    }
  });
}

const observer = new IntersectionObserver(onEntry, options);

const elements = document.querySelectorAll('.anim');
elements.forEach(target => observer.observe(target));