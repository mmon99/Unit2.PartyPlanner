const getEvents = async () => {
  const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2410-ftb-mt-web-pt/events');
  const eventInfo = await response.json();
  const events = eventInfo.data; 

  const eventsDetails = document.querySelector('main');

  if (events) {
    eventsDetails.innerHTML = events.map(event => 
     `<p>${event.name}</p>
      <p>${event.date}</p>
      <p>${event.location}</p>
      <p>${event.description}</p>`).join('');

  } else {
    eventsDetails.innerHTML = '<p>Events are not available. Please try later.</p>';
  };
};

getEvents();



 
