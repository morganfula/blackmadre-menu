const cursor = document.getElementById('cursor');

console.log(cursor);

document.body.addEventListener('mousemove', (e) => {
  console.log(e);

  const coord = {
    x: e.clientX,
    y: e.clientY,
  };

  cursor.style.transform = `translate3D(${coord.x}px, ${coord.y}px, 0)`;
});
