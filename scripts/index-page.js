let commentsArray=[
    {user: "Connor Walton",
    date: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},

    {user: "Emilie Beach",
    date: "01/09/2021",
    comment:"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},


    {user: "Miles Acosta",
    date: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
];

const commentSection=document.querySelector(".comments__list");

function displayComments(arr){
    let comment=document.createElement("li");
    comment.classList.add("comments__item")
    
    let profilepic=document.createElement("div");
    profilepic.classList.add("comments__profile-pic-div");

    let commentHeader=document.createElement("div")
    commentHeader.classList.add("comments__header")

    let commentDiv=document.createElement("div");
    commentDiv.classList.add("comments__container")

    let userName=document.createElement("p");
    userName.innerText=arr.user;
    userName.classList.add("comments__username")

    let commentDate=document.createElement("p");
    commentDate.innerText=arr.date;

    let commentText=document.createElement("p");
    commentText.innerText=arr.comment;

    
    commentSection.appendChild(comment);
    comment.appendChild(profilepic);
    comment.appendChild(commentDiv);
    commentDiv.appendChild(commentHeader);
    commentHeader.appendChild(userName);
    commentHeader.appendChild(commentDate);
    commentDiv.appendChild(commentText);
};

commentsArray.forEach((comment)=>{
    displayComments(comment)
});