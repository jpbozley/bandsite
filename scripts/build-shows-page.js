let showsArray = [
    {date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Fransisco, CA"},

    {date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Fransisco, CA"},

    {date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA"},

    {date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA"},

    {date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA"},

    {date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA"}

];

const showsList=document.querySelector(".tour-dates__list");

function displayShows(arr){
    let show=document.createElement("li");
    show.classList.add("tour-dates__item");

    let dateHeading=document.createElement("h3");
    dateHeading.innerText="DATE";
    dateHeading.classList.add("tour-dates__header")

    let venueHeading=document.createElement("h3");
    venueHeading.innerText="VENUE";
    venueHeading.classList.add("tour-dates__header");

    let locationHeading=document.createElement("h3");
    locationHeading.innerText="LOCATION";
    locationHeading.classList.add("tour-dates__header")


    let showDate=document.createElement("p");
    showDate.innerText=arr.date;
    showDate.classList.add("tour-dates__info", "tour-dates__info--bold")


    let showVenue=document.createElement("p");
    showVenue.innerText=arr.venue;
    showVenue.classList.add("tour-dates__info")

    let showLocation=document.createElement("p");
    showLocation.innerText=arr.location;
    showLocation.classList.add("tour-dates__info")

    let buyButton=document.createElement("button");
    buyButton.innerText="Buy Tickets"
    buyButton.classList.add("tour-dates__button")

    showsList.appendChild(show);
    show.appendChild(dateHeading);
    show.appendChild(showDate);
    show.appendChild(venueHeading);
    show.appendChild(showVenue);
    show.appendChild(locationHeading);
    show.appendChild(showLocation);
    show.appendChild(buyButton);


    
    let clickHandler=function(event){
        let selectedDate=document.querySelectorAll(".tour-dates__item")
        for(let i=0; i<selectedDate.length; i++){
        selectedDate[i].classList.remove("tour-dates__item--selected");
        event.currentTarget.classList.add("tour-dates__item--selected")
    }
}
show.addEventListener('click',clickHandler);
}

showsArray.forEach((show)=>{
    displayShows(show)
});
