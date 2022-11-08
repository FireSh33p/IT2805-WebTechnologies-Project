document.querySelectorAll('.card').forEach(element => {
    element.addEventListener('click', cardClick)
});
function cardClick(event){
    const card = event.currentTarget;
    const card_content = card.getElementsByTagName('div')[1];
    const card_category = card_content.getElementsByTagName('p')[0];
    const card_face2 = card_content.getElementsByTagName('div')[2];
    const card_background = card.getElementsByTagName('div')[0];
    card_content.classList.toggle("card_content_open");
    card_content.classList.toggle("card_content_closed");
    card_category.classList.toggle('card_category_open');
    card_category.classList.toggle('card_category_closed');
    card_face2.classList.toggle('face2_open');
    card_face2.classList.toggle('face2_closed');
    card_background.style.filter = "brightness(0.5) saturate(0) contrast(1.2) blur(20px)";
}