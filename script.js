const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

    // Function to strip "a", "an", and "the" from the beginning of a string
    function stripArticle(str) {
      return str.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the bands ignoring articles
    const sortedBands = bands.slice().sort((a, b) => {
      const bandA = stripArticle(a).toLowerCase();
      const bandB = stripArticle(b).toLowerCase();
      return bandA.localeCompare(bandB);
    });

    // Populate the list with sorted bands
    const ul = document.getElementById('bands'); // Matches updated id
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      ul.appendChild(li);
    });