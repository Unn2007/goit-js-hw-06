const link = document.body.firstElementChild.nextElementSibling.children;
console.log("Number of categories:", link.length);
[...link].forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log(
    "Elements:",
    item.firstElementChild.nextElementSibling.children.length
  );
});
