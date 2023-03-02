const newlogHandler = async (event) => {
    event.preventDefault();

    document.location.replace('/log');
  };
  

  document
    .querySelector('#createlog')
    .addEventListener('click', newlogHandler);
