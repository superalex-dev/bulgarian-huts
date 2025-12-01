const StorageManager = {
  getLikes: () => {
    const likes = localStorage.getItem('hutLikes');
    return likes ? JSON.parse(likes) : {};
  },
  
  saveLikes: (likes) => {
    localStorage.setItem('hutLikes', JSON.stringify(likes));
  },
  
  getLikeCounts: () => {
    const counts = localStorage.getItem('hutLikeCounts');
    return counts ? JSON.parse(counts) : {
      'mazalat': 0,
      'ribni-ezera': 0,
      'vihren': 0,
      'yavorov': 0
    };
  },
  
  saveLikeCounts: (counts) => {
    localStorage.setItem('hutLikeCounts', JSON.stringify(counts));
  },
  
  getUserLikes: () => {
    const userLikes = localStorage.getItem('userLikes');
    return userLikes ? JSON.parse(userLikes) : {};
  },
  
  saveUserLikes: (userLikes) => {
    localStorage.setItem('userLikes', JSON.stringify(userLikes));
  },
  
  saveFormSubmission: (submission) => {
    const submissions = this.getFormSubmissions();
    submissions.push({
      ...submission,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
  },
  
  getFormSubmissions: () => {
    const submissions = localStorage.getItem('formSubmissions');
    return submissions ? JSON.parse(submissions) : [];
  },
  
  getRatings: () => {
    const ratings = localStorage.getItem('hutRatings');
    return ratings ? JSON.parse(ratings) : {
      'mazalat': { average: 0, count: 0, reviews: [] },
      'ribni-ezera': { average: 0, count: 0, reviews: [] },
      'vihren': { average: 0, count: 0, reviews: [] },
      'yavorov': { average: 0, count: 0, reviews: [] }
    };
  },
  
  saveRatings: (ratings) => {
    localStorage.setItem('hutRatings', JSON.stringify(ratings));
  },
  
  addRating: (hutId, rating, review) => {
    const ratings = this.getRatings();
    if (!ratings[hutId]) {
      ratings[hutId] = { average: 0, count: 0, reviews: [] };
    }
    ratings[hutId].reviews.push({
      rating: rating,
      review: review,
      timestamp: new Date().toISOString(),
      id: Date.now()
    });
    const total = ratings[hutId].reviews.reduce((sum, r) => sum + r.rating, 0);
    ratings[hutId].count = ratings[hutId].reviews.length;
    ratings[hutId].average = (total / ratings[hutId].count).toFixed(1);
    this.saveRatings(ratings);
    return ratings[hutId];
  },
  
  getBookings: () => {
    const bookings = localStorage.getItem('hutBookings');
    return bookings ? JSON.parse(bookings) : [];
  },
  
  saveBooking: (booking) => {
    const bookings = this.getBookings();
    bookings.push({
      ...booking,
      id: Date.now(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('hutBookings', JSON.stringify(bookings));
  }
};

const HutData = {
  'mazalat': {
    name: 'Хижа Мазалат',
    mountain: 'Стара Планина',
    price: 25,
    altitude: '1650м надм.в.',
    capacity: '40 места',
    description: 'Разположена в сърцето на планината, предлагаща невероятна гледка към масива Триглав.',
    fullDescription: 'Хижа Мазалат е една от най-старите и автентични хижи в Стара Планина. Построена през 1930-те години, тя е свидетел на вековна история на планинарството в България. Разположена на стратегическа позиция, хижата предлага панорамна гледка към масива Триглав и околните върхове. Сградата е изградена в традиционен стил с каменни стени и дървени греди, което създава неповторима атмосфера на уют и топлина. Вътре има просторна обща зала с голяма камина, където планинарите могат да се събират вечер и да споделят истории от преходите си.',
    amenities: ['🔥 Камина', '🍽️ Ресторант', '🛏️ Общи стаи', '🚿 Топла вода', '🪵 Дърва за огрев'],
    images: [
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1200&auto=format'
    ],
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=600&auto=format',
    location: 'Мазалат, Стара Планина',
    coordinates: '42.7833° N, 24.6167° E',
    contact: '+359 888 123 456',
    email: 'mazalat@bghuts.com',
    season: 'Цяла година',
    routes: [
      { 
        name: 'Маршрут към връх Триглав', 
        difficulty: 'Среден', 
        duration: '4-5 часа', 
        distance: '8 км',
        elevationGain: '626м',
        bestSeason: 'Май - Октомври',
        description: 'Класически маршрут към най-високия връх в масива Триглав. Маршрутът започва от хижата и води през вековни букови гори, след което преминава през алпийски пасища. Последната част е по-стръмна с камениста пътека. От върха се открива панорамна гледка към цялата Стара Планина.'
      },
      { 
        name: 'Маршрут към връх Ботев', 
        difficulty: 'Труден', 
        duration: '6-7 часа', 
        distance: '12 км',
        elevationGain: '1026м',
        bestSeason: 'Юни - Септември',
        description: 'Преминаване към най-високия връх на Стара Планина - Ботев (2376м). Маршрутът е дълъг и изисква добра физическа подготовка. Преминава през резерват "Стенето" и предлага уникални гледки към защитени видове растения и животни. На върха има метеорологична станция и паметник.'
      },
      { 
        name: 'Кръгов маршрут Мазалат', 
        difficulty: 'Лек', 
        duration: '3-4 часа', 
        distance: '6 км',
        elevationGain: '300м',
        bestSeason: 'Цяла година',
        description: 'Идеален маршрут за начинаещи планинари и семейства. Кръговият маршрут обикаля района около хижата, преминавайки през красиви гори и поляни. Подходящ за всякакви сезони, включително зима с подходящо оборудване.'
      }
    ],
    nearby: ['Връх Триглав (2276м)', 'Водопад Райското пръскало', 'Пещера Съева дупка', 'Резерват "Стенето"']
  },
  'ribni-ezera': {
    name: 'Хижа Рибни Езера',
    mountain: 'Рила',
    price: 30,
    altitude: '2200м надм.в.',
    capacity: '60 места',
    description: 'Сгушена между върховете, идеална за почивка след преход в Рила.',
    fullDescription: 'Хижа Рибни Езера е модерна и комфортна хижа, разположена високо в планината Рила, близо до едноименните езера. Построена през 1980-те години, тя е една от най-големите и най-добре оборудвани хижи в България. Хижата предлага отлични условия за почивка след преход към най-високия връх на Балканите - Мусала (2925м). Сградата е модерна с добре обзаведени стаи, топла вода и отлична кухня. От терасата на хижата се открива невероятна панорама към седемте Рилски езера и околните върхове. През лятото районът е идеален за туризъм, а през зимата - за ски туризъм.',
    amenities: ['🔥 Камина', '🍽️ Ресторант', '🚿 Душ', '🛏️ Стаи с 2-4 легла', '📺 ТВ зала', '☕ Кафе машина'],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format',
    location: 'Рибни Езера, Рила',
    coordinates: '42.2000° N, 23.3167° E',
    contact: '+359 888 234 567',
    email: 'ribni.ezera@bghuts.com',
    season: 'Цяла година',
    routes: [
      { 
        name: 'Маршрут към връх Мусала', 
        difficulty: 'Труден', 
        duration: '5-6 часа', 
        distance: '10 км',
        elevationGain: '725м',
        bestSeason: 'Юни - Септември',
        description: 'Маршрут към най-високия връх на Балканския полуостров - Мусала (2925м). Маршрутът е маркиран и поддържан от Българския туристически съюз. Преминава през алпийска зона с уникална флора и фауна. На върха има метеорологична станция и панорамна гледка към цялата Рила планина.'
      },
      { 
        name: 'Маршрут към Седемте езера', 
        difficulty: 'Среден', 
        duration: '3-4 часа', 
        distance: '7 км',
        elevationGain: '400м',
        bestSeason: 'Май - Октомври',
        description: 'Един от най-популярните маршрути в Рила. Води до легендарните Седем Рилски езера - Сълзата, Окото, Бъбрека, Близнака, Трилистника, Рибното и Долното езеро. Всеки езеро има своя уникална форма и цвят. Маршрутът е част от националния парк Рила.'
      },
      { 
        name: 'Кръгов маршрут Рибни Езера', 
        difficulty: 'Лек', 
        duration: '2-3 часа', 
        distance: '5 км',
        elevationGain: '200м',
        bestSeason: 'Цяла година',
        description: 'Кратък и приятен маршрут около хижата, подходящ за всички възрасти. Преминава през красиви алпийски пасища и предлага гледки към околните върхове. Идеален за вечерна разходка или за аклиматизация преди по-тежки преходи.'
      }
    ],
    nearby: ['Седемте Рилски езера', 'Връх Мусала (2925м)', 'Връх Малая Мусала (2902м)', 'Ски курорт Боровец']
  },
  'vihren': {
    name: 'Хижа Вихрен',
    mountain: 'Пирин',
    price: 20,
    altitude: '1950м надм.в.',
    capacity: '35 места',
    description: 'Изходна точка за най-високия връх в Пирин. Лесен достъп с автомобил.',
    fullDescription: 'Хижа Вихрен е удобна и достъпна хижа, разположена в подножието на най-високия връх в Пирин - Вихрен (2914м). Това я прави идеална изходна точка за изкачване на върха. Хижата е построена през 1970-те години и е реконструирана през 2010 година. Има паркинг за автомобили, което я прави достъпна и за тези, които не искат да правят дълъг преход. Сградата е функционална с общи стаи и добре оборудвана кухня. От хижата започва най-популярният маршрут към Вихрен, който е маркиран и поддържан през цялата година. През зимата районът е популярен за алпийски ски и сноуборд.',
    amenities: ['🚗 Паркинг', '🍽️ Ресторант', '🛏️ Общи стаи', '🔥 Камина', '📱 Покритие'],
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1200&auto=format'
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format',
    location: 'Вихрен, Пирин',
    coordinates: '41.7667° N, 23.4000° E',
    contact: '+359 888 345 678',
    email: 'vihren@bghuts.com',
    season: 'Цяла година',
    routes: [
      { 
        name: 'Маршрут към връх Вихрен', 
        difficulty: 'Труден', 
        duration: '4-5 часа', 
        distance: '9 км',
        elevationGain: '964м',
        bestSeason: 'Юни - Септември',
        description: 'Изкачване на най-високия връх в Пирин - Вихрен (2914м). Маршрутът е стръмен и изисква опит. Преминава през скалисти участъци и алпийска зона. От върха се открива невероятна панорама към цялата Пирин планина и дори към Егейско море при ясно време. Върхът е част от националния парк Пирин, обект на световното наследство на ЮНЕСКО.'
      },
      { 
        name: 'Маршрут към връх Кутело', 
        difficulty: 'Среден', 
        duration: '3-4 часа', 
        distance: '7 км',
        elevationGain: '958м',
        bestSeason: 'Май - Октомври',
        description: 'Маршрут към втория по височина връх в Пирин - Кутело (2908м). По-лесен алтернативен маршрут към високия Пирин. Преминава през красиви долини и алпийски пасища. От върха има отлична гледка към Вихрен и останалите високи върхове.'
      },
      { 
        name: 'Маршрут към езеро Попово', 
        difficulty: 'Лек', 
        duration: '2 часа', 
        distance: '4 км',
        elevationGain: '150м',
        bestSeason: 'Май - Октомври',
        description: 'Приятен и лесен маршрут към най-голямото ледниково езеро в Пирин - Попово езеро. Езерото е разположено на 2234м надморска височина и е най-дълбокото в Пирин (29.5м). Идеален маршрут за семейства и начинаещи планинари. Пътеката е добре маркирана и поддържана.'
      }
    ],
    nearby: ['Връх Вихрен (2914м)', 'Езеро Попово', 'Връх Кутело (2908м)', 'Град Банско']
  },
  'yavorov': {
    name: 'Хижа Яворов',
    mountain: 'Пирин',
    price: 28,
    altitude: '1740м надм.в.',
    capacity: '50 места',
    description: 'Любимо място на всички планинари заради уюта и гостоприемството.',
    fullDescription: 'Хижа Яворов е легендарна хижа в Пирин, известна с изключителното си гостоприемство и уютна атмосфера. Построена през 1960-те години, тя е преминала през няколко реконструкции, като последната е от 2015 година. Хижата е известна с топлото си обслужване и домашна кухня, което я прави любимо място на много планинари. Сградата е модерна с добре обзаведени стаи, топла вода, WiFi и отлична кухня, която предлага традиционни български ястия. От терасата се открива красива гледка към околните върхове и долини. Хижата е идеална база за изследване на централния Пирин и е достъпна както с автомобил, така и с преход.',
    amenities: ['🔥 Камина', '🍽️ Ресторант', '🚿 Душ', '📶 WiFi', '🛏️ Стаи с 2-6 легла', '📺 ТВ зала', '☕ Кафе машина'],
    images: [
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1200&auto=format',
      'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1200&auto=format'
    ],
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=600&auto=format',
    location: 'Яворов, Пирин',
    coordinates: '41.7500° N, 23.4500° E',
    contact: '+359 888 456 789',
    email: 'yavorov@bghuts.com',
    season: 'Цяла година',
    routes: [
      { 
        name: 'Маршрут към връх Вихрен', 
        difficulty: 'Труден', 
        duration: '6-7 часа', 
        distance: '14 км',
        elevationGain: '1174м',
        bestSeason: 'Юни - Септември',
        description: 'Дълъг и предизвикателен маршрут към най-високия връх в Пирин. Маршрутът преминава през няколко езера и алпийски пасища преди да достигне върха. Изисква добра физическа подготовка и опит в планинарството. Отличен избор за опитни планинари, търсещи предизвикателство.'
      },
      { 
        name: 'Маршрут към езеро Долното', 
        difficulty: 'Среден', 
        duration: '3-4 часа', 
        distance: '8 км',
        elevationGain: '350м',
        bestSeason: 'Май - Октомври',
        description: 'Маршрут към едно от най-красивите езера в Пирин - Долното езеро. Езерото е разположено на 2095м надморска височина и е част от групата на езерата в долината на река Демяница. Маршрутът преминава през вековни борови гори и алпийски пасища.'
      },
      { 
        name: 'Кръгов маршрут Яворов', 
        difficulty: 'Лек', 
        duration: '2-3 часа', 
        distance: '6 км',
        elevationGain: '250м',
        bestSeason: 'Цяла година',
        description: 'Кръгов маршрут около хижата, подходящ за всички. Преминава през красиви гори и поляни, предлагайки възможност за отдих и наслада от природата. Идеален за вечерни разходки и аклиматизация.'
      },
      { 
        name: 'Маршрут към връх Каменица', 
        difficulty: 'Среден', 
        duration: '4-5 часа', 
        distance: '10 км',
        elevationGain: '1082м',
        bestSeason: 'Май - Октомври',
        description: 'Маршрут към върха Каменица (2822м), един от най-красивите върхове в Пирин. Маршрутът преминава през скалисти участъци и алпийска зона. От върха се открива панорамна гледка към централния Пирин и езерата в района.'
      }
    ],
    nearby: ['Езеро Долното', 'Връх Каменица (2822м)', 'Връх Вихрен (2914м)', 'Град Разлог']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
  }

  const burger = document.getElementById('burger-btn');
  const navList = document.getElementById('nav-list');
  const navLinks = navList ? navList.querySelectorAll('a') : [];

  if (burger && navList) {
      burger.addEventListener('click', () => {
          navList.classList.toggle('active');
      });

      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              navList.classList.remove('active');
          });
      });
  }

  initializeHutsPage();
  initializeFavoritesPage();
  initializeEventListeners();
  
  const likeButtons = document.querySelectorAll('.btn-like');
  const likeCounts = StorageManager.getLikeCounts();
  const userLikes = StorageManager.getUserLikes();
  const ratings = StorageManager.getRatings();

  likeButtons.forEach(btn => {
    const hutId = btn.getAttribute('data-hut-id');
    if (!hutId) return;

    const countElement = document.querySelector(`[data-hut-count="${hutId}"]`);
    
    if (countElement) {
      countElement.textContent = likeCounts[hutId] || 0;
    }

    if (userLikes[hutId]) {
      btn.classList.add('liked');
      btn.innerHTML = '❤️ Харесано';
    }
    
    updateRatingDisplay(hutId, ratings[hutId]);
  });
  
  const bookingNights = document.getElementById('bookingNights');
  const bookingGuests = document.getElementById('bookingGuests');
  if (bookingNights && bookingGuests) {
    bookingNights.addEventListener('input', updateBookingTotal);
    bookingGuests.addEventListener('input', updateBookingTotal);
  }

  const form = document.getElementById('contactForm');
  
  if (form) {
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          let isValid = true;

          const name = document.getElementById('name');
          const email = document.getElementById('email');
          const message = document.getElementById('message');
          const successBox = document.getElementById('successMessage');

          document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
          successBox.style.display = 'none';

          if (name.value.trim().length < 2) {
              document.getElementById('nameError').textContent = 'Моля, въведете име (минимум 2 символа).';
              isValid = false;
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email.value)) {
              document.getElementById('emailError').textContent = 'Моля, въведете валиден имейл адрес.';
              isValid = false;
          }

          if (message.value.trim().length < 10) {
              document.getElementById('messageError').textContent = 'Съобщението трябва да е поне 10 символа.';
              isValid = false;
          }

          if (isValid) {
              const submission = {
                  name: name.value.trim(),
                  email: email.value.trim(),
                  message: message.value.trim()
              };
              
              StorageManager.saveFormSubmission(submission);
              
              console.log('Form submission saved:', submission);
              console.log('Total submissions:', StorageManager.getFormSubmissions().length);
              
              successBox.style.display = 'block';
              form.reset();
              
              setTimeout(() => {
                  successBox.style.display = 'none';
              }, 5000);
          }
      });
  }
});

function toggleLike(btn) {
  const hutId = btn.getAttribute('data-hut-id');
  if (!hutId) return;

  const userLikes = StorageManager.getUserLikes();
  const likeCounts = StorageManager.getLikeCounts();
  const countElement = document.querySelector(`[data-hut-count="${hutId}"]`);
  
  const isLiked = btn.classList.contains('liked');
  
  if (isLiked) {
    btn.classList.remove('liked');
    btn.innerHTML = '🤍 Харесай';
    userLikes[hutId] = false;
    likeCounts[hutId] = Math.max(0, (likeCounts[hutId] || 0) - 1);
  } else {
    btn.classList.add('liked');
    btn.innerHTML = '❤️ Харесано';
    userLikes[hutId] = true;
    likeCounts[hutId] = (likeCounts[hutId] || 0) + 1;
  }
  
  if (countElement) {
    countElement.textContent = likeCounts[hutId] || 0;
  }
  
  StorageManager.saveUserLikes(userLikes);
  StorageManager.saveLikeCounts(likeCounts);
  
  console.log(`Like updated for ${hutId}: ${likeCounts[hutId]} total likes`);
}

window.viewSubmissions = function() {
  const submissions = StorageManager.getFormSubmissions();
  console.table(submissions);
  return submissions;
};

window.viewLikeStats = function() {
  const counts = StorageManager.getLikeCounts();
  const userLikes = StorageManager.getUserLikes();
  console.log('Like Counts:', counts);
  console.log('Your Likes:', userLikes);
  return { counts, userLikes };
};

window.viewBookings = function() {
  const bookings = StorageManager.getBookings();
  console.table(bookings);
  console.log(`Total bookings: ${bookings.length}`);
  return bookings;
};

function initializeHutsPage() {
  const searchInput = document.getElementById('searchInput');
  const mountainFilter = document.getElementById('mountainFilter');
  const priceFilter = document.getElementById('priceFilter');
  const sortSelect = document.getElementById('sortSelect');
  
  if (searchInput) {
    searchInput.addEventListener('input', filterHuts);
  }
  if (mountainFilter) {
    mountainFilter.addEventListener('change', filterHuts);
  }
  if (priceFilter) {
    priceFilter.addEventListener('change', filterHuts);
  }
  if (sortSelect) {
    sortSelect.addEventListener('change', filterHuts);
  }
}

function filterHuts() {
  const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const mountainFilter = document.getElementById('mountainFilter')?.value || '';
  const priceFilter = document.getElementById('priceFilter')?.value || '';
  const sortSelect = document.getElementById('sortSelect')?.value || 'default';
  const hutsGrid = document.getElementById('hutsGrid');
  const resultsCount = document.getElementById('resultsCount');
  
  if (!hutsGrid) return;
  
  const cards = Array.from(hutsGrid.querySelectorAll('.hut-card'));
  let visibleCount = 0;
  
  cards.forEach(card => {
    const name = card.getAttribute('data-name')?.toLowerCase() || '';
    const mountain = card.getAttribute('data-mountain') || '';
    const price = parseInt(card.getAttribute('data-price') || '0');
    
    let visible = true;
    
    if (searchTerm && !name.includes(searchTerm)) {
      visible = false;
    }
    
    if (mountainFilter && mountain !== mountainFilter) {
      visible = false;
    }
    
    if (priceFilter) {
      if (priceFilter.endsWith('+')) {
        const minPrice = parseInt(priceFilter);
        if (price < minPrice) visible = false;
      } else {
        const [min, max] = priceFilter.split('-').map(p => parseInt(p));
        if (price < min || price > max) visible = false;
      }
    }
    
    card.style.display = visible ? '' : 'none';
    if (visible) visibleCount++;
  });
  
  if (sortSelect !== 'default') {
    const visibleCards = cards.filter(c => c.style.display !== 'none');
    visibleCards.sort((a, b) => {
      switch(sortSelect) {
        case 'price-asc':
          return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
        case 'price-desc':
          return parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price'));
        case 'likes-desc':
          const counts = StorageManager.getLikeCounts();
          const aId = a.getAttribute('data-hut');
          const bId = b.getAttribute('data-hut');
          return (counts[bId] || 0) - (counts[aId] || 0);
        case 'name-asc':
          return (a.getAttribute('data-name') || '').localeCompare(b.getAttribute('data-name') || '');
        default:
          return 0;
      }
    });
    
    visibleCards.forEach(card => hutsGrid.appendChild(card));
  }
  
  if (resultsCount) {
    resultsCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'хижа' : 'хижи'}`;
  }
}

function clearFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('mountainFilter').value = '';
  document.getElementById('priceFilter').value = '';
  document.getElementById('sortSelect').value = 'default';
  filterHuts();
}

function initializeEventListeners() {
  const clearFiltersBtn = document.getElementById('clearFiltersBtn');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', clearFilters);
  }

  document.querySelectorAll('[data-hut-click]').forEach(element => {
    element.addEventListener('click', function() {
      const hutId = this.getAttribute('data-hut-click');
      if (hutId) openHutDetails(hutId);
    });
  });

  document.querySelectorAll('.btn-like').forEach(btn => {
    btn.addEventListener('click', function() {
      toggleLike(this);
    });
  });

  document.querySelectorAll('[data-booking]').forEach(btn => {
    btn.addEventListener('click', function() {
      const hutId = this.getAttribute('data-booking');
      const hutCard = this.closest('.hut-card');
      if (hutCard && hutId) {
        const hutName = hutCard.getAttribute('data-name');
        const price = parseInt(hutCard.getAttribute('data-price'));
        if (hutName && price) {
          openBookingModal(hutId, hutName, price);
        }
      }
    });
  });

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(event) {
      event.preventDefault();
      handleBooking(event);
    });
  }

  document.querySelectorAll('[data-modal-close]').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modalType = this.getAttribute('data-modal-close');
      if (modalType === 'booking') {
        closeBookingModal();
      } else if (modalType === 'details') {
        closeHutDetails();
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (e.target.matches('[data-gallery-nav]')) {
      const hutId = e.target.getAttribute('data-gallery-nav');
      const direction = parseInt(e.target.getAttribute('data-direction'));
      changeImage(hutId, direction);
    }
    
    if (e.target.matches('[data-thumbnail]')) {
      const hutId = e.target.getAttribute('data-thumbnail');
      const index = parseInt(e.target.getAttribute('data-image-index'));
      selectImage(hutId, index);
    }
    
    if (e.target.matches('[data-booking-from-details]')) {
      const hutId = e.target.getAttribute('data-booking-from-details');
      const hut = HutData[hutId];
      if (hut) {
        closeHutDetails();
        openBookingModal(hutId, hut.name, hut.price);
      }
    }
    
    if (e.target.matches('[data-review-modal]')) {
      const hutId = e.target.getAttribute('data-review-modal');
      openReviewModal(hutId);
    }
  });
}

document.addEventListener('click', function(e) {
  if (e.target.matches('[data-hut-click]')) {
    const hutId = e.target.getAttribute('data-hut-click');
    if (hutId) openHutDetails(hutId);
  }
  
  if (e.target.matches('[data-booking]')) {
    const hutId = e.target.getAttribute('data-booking');
    const hutCard = e.target.closest('.hut-card');
    if (hutCard && hutId) {
      const hutName = hutCard.getAttribute('data-name');
      const price = parseInt(hutCard.getAttribute('data-price'));
      if (hutName && price) {
        openBookingModal(hutId, hutName, price);
      }
    }
  }
});

function updateRatingDisplay(hutId, ratingData) {
  if (!ratingData || ratingData.count === 0) return;
  
  const starsElement = document.querySelector(`[data-rating="${hutId}"]`);
  const ratingTextElement = document.querySelector(`[data-rating-text="${hutId}"]`);
  
  if (starsElement) {
    const fullStars = Math.floor(ratingData.average);
    const hasHalf = ratingData.average % 1 >= 0.5;
    let stars = '⭐'.repeat(fullStars);
    if (hasHalf) stars += '½';
    starsElement.textContent = stars || 'Няма оценки';
  }
  
  if (ratingTextElement) {
    ratingTextElement.textContent = `${ratingData.average} (${ratingData.count})`;
  }
}

function openBookingModal(hutId, hutName, price) {
  const modal = document.getElementById('bookingModal');
  const modalHutName = document.getElementById('modalHutName');
  const modalHutId = document.getElementById('modalHutId');
  
  if (modal && modalHutName && modalHutId) {
    modalHutName.textContent = `Резервация: ${hutName}`;
    modalHutId.value = hutId;
    modal.style.display = 'block';
    updateBookingTotal();
    
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
      dateInput.min = today;
      if (!dateInput.value) dateInput.value = today;
    }
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.style.display = 'none';
    document.getElementById('bookingForm')?.reset();
  }
}

function updateBookingTotal() {
  const hutId = document.getElementById('modalHutId')?.value;
  const nightsInput = document.getElementById('bookingNights');
  const guestsInput = document.getElementById('bookingGuests');
  const totalElement = document.getElementById('bookingTotal');
  
  if (!hutId || !HutData[hutId] || !totalElement) return;
  
  const nights = parseInt(nightsInput?.value || '1');
  const guests = parseInt(guestsInput?.value || '1');
  const price = HutData[hutId].price;
  const total = price * nights * guests;
  totalElement.textContent = total;
}

function handleBooking(event) {
  event.preventDefault();
  
  const hutId = document.getElementById('modalHutId')?.value;
  const name = document.getElementById('bookingName')?.value?.trim();
  const email = document.getElementById('bookingEmail')?.value?.trim();
  const date = document.getElementById('bookingDate')?.value;
  const nights = parseInt(document.getElementById('bookingNights')?.value || '1');
  const guests = parseInt(document.getElementById('bookingGuests')?.value || '1');
  const total = parseInt(document.getElementById('bookingTotal')?.textContent || '0');
  
  if (!hutId || !name || !email || !date) {
    alert('Моля, попълнете всички задължителни полета!');
    return;
  }
  
  const booking = {
    hutId: hutId,
    hutName: HutData[hutId]?.name || 'Unknown',
    name: name,
    email: email,
    date: date,
    nights: nights,
    guests: guests,
    total: total
  };
  
  StorageManager.saveBooking(booking);
  console.log('Booking saved:', booking);
  alert(`Резервацията е потвърдена!\n\nХижа: ${booking.hutName}\nИме: ${booking.name}\nДата: ${new Date(booking.date).toLocaleDateString('bg-BG')}\nНощувки: ${booking.nights}\nГости: ${booking.guests}\nОбща сума: ${booking.total} лв`);
  closeBookingModal();
}

function openHutDetails(hutId) {
  const modal = document.getElementById('hutDetailsModal');
  const content = document.getElementById('hutDetailsContent');
  const hut = HutData[hutId];
  const ratings = StorageManager.getRatings();
  const ratingData = ratings[hutId] || { average: 0, count: 0, reviews: [] };
  
  if (!modal || !content || !hut) return;
  
  const images = hut.images || [hut.image];
  let imageGalleryHtml = '';
  if (images.length > 0) {
    imageGalleryHtml = `
      <div class="image-gallery">
        <div class="main-image-container">
          <img src="${images[0]}" alt="${hut.name}" class="main-image" id="mainImage-${hutId}">
          <button class="gallery-nav prev" data-gallery-nav="${hutId}" data-direction="-1">‹</button>
          <button class="gallery-nav next" data-gallery-nav="${hutId}" data-direction="1">›</button>
          <div class="image-counter">
            <span id="currentImage-${hutId}">1</span> / ${images.length}
          </div>
        </div>
        <div class="thumbnail-gallery">
          ${images.map((img, index) => `
            <img src="${img}" alt="${hut.name} - Снимка ${index + 1}" 
                 class="thumbnail ${index === 0 ? 'active' : ''}" 
                 data-thumbnail="${hutId}" data-image-index="${index}">
          `).join('')}
        </div>
      </div>
    `;
  }
  
  let routesHtml = '';
  if (hut.routes && hut.routes.length > 0) {
    routesHtml = `
      <div class="routes-section">
        <h3>Маршрути</h3>
        <div class="routes-list">
          ${hut.routes.map(route => `
            <div class="route-item">
              <div class="route-header">
                <strong>${route.name}</strong>
                <span class="route-difficulty difficulty-${route.difficulty.toLowerCase().replace(' ', '-')}">${route.difficulty}</span>
              </div>
              ${route.description ? `<p class="route-description">${route.description}</p>` : ''}
              <div class="route-stats">
                <div class="route-stat">
                  <span class="stat-icon">⏱️</span>
                  <span class="stat-label">Време:</span>
                  <span class="stat-value">${route.duration}</span>
                </div>
                <div class="route-stat">
                  <span class="stat-icon">📏</span>
                  <span class="stat-label">Разстояние:</span>
                  <span class="stat-value">${route.distance}</span>
                </div>
                ${route.elevationGain ? `
                <div class="route-stat">
                  <span class="stat-icon">⛰️</span>
                  <span class="stat-label">Денивелация:</span>
                  <span class="stat-value">${route.elevationGain}</span>
                </div>
                ` : ''}
                ${route.bestSeason ? `
                <div class="route-stat">
                  <span class="stat-icon">📅</span>
                  <span class="stat-label">Сезон:</span>
                  <span class="stat-value">${route.bestSeason}</span>
                </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="routes-info">
          <p><strong>💡 Съвет:</strong> За повече информация и актуални маршрути, посетете <a href="https://www.tripsjournal.com" target="_blank" rel="noopener noreferrer">TripsJournal.com</a></p>
        </div>
      </div>
    `;
  }
  
  let nearbyHtml = '';
  if (hut.nearby && hut.nearby.length > 0) {
    nearbyHtml = `
      <div class="nearby-section">
        <h3>Близки забележителности</h3>
        <ul class="nearby-list">
          ${hut.nearby.map(item => `<li>📍 ${item}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  let reviewsHtml = '';
  if (ratingData.reviews && ratingData.reviews.length > 0) {
    reviewsHtml = ratingData.reviews.slice(-10).reverse().map(review => `
      <div class="review-item">
        <div class="review-header">
          <span class="review-stars">${'⭐'.repeat(review.rating)}</span>
          <span class="review-date">${new Date(review.timestamp).toLocaleDateString('bg-BG')}</span>
        </div>
        <p class="review-text">${review.review || 'Няма коментар'}</p>
      </div>
    `).join('');
  } else {
    reviewsHtml = '<p class="no-reviews">Няма ревюта все още. Бъдете първият!</p>';
  }
  
  content.innerHTML = `
    <div class="hut-details">
      ${imageGalleryHtml}
      
      <div class="details-header">
        <h2>${hut.name}</h2>
        <div class="details-meta">
          <span>📍 ${hut.mountain}</span>
          <span>⛰️ ${hut.altitude}</span>
          <span>🛏️ ${hut.capacity}</span>
          <span>💰 ${hut.price} лв/нощ</span>
          <span>📅 ${hut.season || 'Цяла година'}</span>
        </div>
      </div>
      
      <div class="details-content">
        <div class="details-main">
          <div class="description-section">
            <h3>Описание</h3>
            <p class="details-description">${hut.fullDescription || hut.description}</p>
          </div>
          
          <div class="location-section">
            <h3>Локация</h3>
            <div class="location-info">
              <p><strong>📍 Адрес:</strong> ${hut.location}</p>
              <p><strong>🌐 Координати:</strong> ${hut.coordinates}</p>
              ${hut.contact ? `<p><strong>📞 Телефон:</strong> ${hut.contact}</p>` : ''}
              ${hut.email ? `<p><strong>📧 Имейл:</strong> ${hut.email}</p>` : ''}
            </div>
          </div>
          
          <div class="details-amenities">
            <h3>Удобства</h3>
            <div class="amenities-list">
              ${hut.amenities.map(a => `<span class="amenity">${a}</span>`).join('')}
            </div>
          </div>
          
          ${routesHtml}
          ${nearbyHtml}
        </div>
        
        <div class="details-sidebar">
          <div class="booking-widget">
            <h3>Резервирай сега</h3>
            <p class="price-large">${hut.price} лв/нощ</p>
            <button class="btn btn-primary full-width" data-booking-from-details="${hutId}">
              Резервирай
            </button>
          </div>
          
          <div class="details-ratings">
            <h3>Ревюта ${ratingData.count > 0 ? `(${ratingData.average}/5 от ${ratingData.count})` : '(Няма оценки)'}</h3>
            ${ratingData.count > 0 ? `
              <div class="rating-summary">
                <div class="rating-average">${ratingData.average}</div>
                <div class="rating-stars-large">${'⭐'.repeat(Math.round(ratingData.average))}</div>
                <div class="rating-count">${ratingData.count} ${ratingData.count === 1 ? 'оценка' : 'оценки'}</div>
              </div>
            ` : ''}
            <button class="btn btn-secondary full-width" data-review-modal="${hutId}">Добави ревю</button>
          </div>
        </div>
      </div>
      
      <div class="reviews-full-section">
        <h3>Всички ревюта</h3>
        <div class="reviews-section">
          ${reviewsHtml}
        </div>
      </div>
    </div>
  `;
  
  modal.style.display = 'block';
  window.currentHutImages = images;
  window.currentHutId = hutId;
}

function changeImage(hutId, direction) {
  const images = window.currentHutImages || [];
  if (images.length === 0) return;
  
  let currentIndex = parseInt(document.getElementById(`currentImage-${hutId}`)?.textContent || '1') - 1;
  currentIndex += direction;
  
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  
  selectImage(hutId, currentIndex);
}

function selectImage(hutId, index) {
  const images = window.currentHutImages || [];
  if (index < 0 || index >= images.length) return;
  
  const mainImage = document.getElementById(`mainImage-${hutId}`);
  const currentImageSpan = document.getElementById(`currentImage-${hutId}`);
  const thumbnails = document.querySelectorAll(`#hutDetailsContent .thumbnail`);
  
  if (mainImage) {
    mainImage.src = images[index];
  }
  
  if (currentImageSpan) {
    currentImageSpan.textContent = index + 1;
  }
  
  thumbnails.forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

function closeHutDetails() {
  const modal = document.getElementById('hutDetailsModal');
  if (modal) modal.style.display = 'none';
}

function openReviewModal(hutId) {
  const review = prompt('Въведете вашата оценка (1-5) и коментар, разделени с нов ред:\nПример:\n5\nОтлично място!');
  if (!review) return;
  
  const lines = review.split('\n');
  const rating = parseInt(lines[0]);
  const reviewText = lines.slice(1).join('\n').trim();
  
  if (rating < 1 || rating > 5) {
    alert('Оценката трябва да е между 1 и 5!');
    return;
  }
  
  StorageManager.addRating(hutId, rating, reviewText);
  alert('Благодарим за ревюто!');
  closeHutDetails();
  openHutDetails(hutId);
}

function initializeFavoritesPage() {
  const container = document.getElementById('favoritesContainer');
  if (!container) return;
  
  const userLikes = StorageManager.getUserLikes();
  const likedHuts = Object.keys(userLikes).filter(id => userLikes[id]);
  
  if (likedHuts.length === 0) {
    return;
  }
  
  container.innerHTML = '';
  
  likedHuts.forEach(hutId => {
    const hut = HutData[hutId];
    if (!hut) return;
    
    const card = document.createElement('article');
    card.className = 'hut-card';
    card.innerHTML = `
      <div class="card-image" data-hut-click="${hutId}">
        <img src="${hut.image}" alt="${hut.name}">
        <span class="badge">${hut.mountain}</span>
      </div>
      <div class="card-content">
        <h2 data-hut-click="${hutId}">${hut.name}</h2>
        <div class="hut-meta">
          <span>📍 ${hut.altitude}</span>
          <span>🛏️ ${hut.capacity}</span>
        </div>
        <p>${hut.description}</p>
        <div class="card-actions">
          <span class="price">${hut.price} лв/нощ</span>
          <div class="action-buttons">
            <button class="btn btn-small" data-booking="${hutId}">Резервирай</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

window.addEventListener('click', (e) => {
  const bookingModal = document.getElementById('bookingModal');
  const hutDetailsModal = document.getElementById('hutDetailsModal');
  if (e.target === bookingModal) closeBookingModal();
  if (e.target === hutDetailsModal) closeHutDetails();
});