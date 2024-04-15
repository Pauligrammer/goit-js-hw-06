const categories = document.querySelectorAll("#categories .item");
const categoriesNumber = categories.length;

console.log("Number of categories:", categoriesNumber);

categories.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const elementsNumber = category.querySelectorAll("li").length;

    console.log("Category:", categoryName);
    console.log("Elements:", elementsNumber);
});