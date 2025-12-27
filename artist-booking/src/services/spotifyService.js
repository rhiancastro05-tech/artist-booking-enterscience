// Service to search for Brazilian artists
// Uses real artist images from public sources

/**
 * Search for artists
 * @param {string} query - Search term
 * @returns {Promise<Array>} - Array of artist objects
 */
export async function searchArtists(query) {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return filtered mock data
    return getMockArtists(query);
  } catch (error) {
    console.error('Error fetching artists:', error);
    return [];
  }
}

/**
 * Get trending/popular artists
 * @returns {Promise<Array>} - Array of trending artist objects
 */
export async function getTrendingArtists() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return getMockArtists('');
  } catch (error) {
    console.error('Error fetching trending artists:', error);
    return [];
  }
}

/**
 * Mock artists data with real images
 * @param {string} query - Search term for filtering
 * @returns {Array} - Array of mock artist objects
 */
function getMockArtists(query = '') {
  const mockData = [
    {
      id: '1',
      name: 'Henrique & Juliano',
      image: '/artists/henrique-&-juliano.jpeg',
      genres: ['Sertanejo'],
      popularity: 97,
      followers: 9200000
    },
    {
      id: '2',
      name: 'Gusttavo Lima',
      image: '/artists/gusttavo-lima.jpeg',
      genres: ['Sertanejo'],
      popularity: 98,
      followers: 10400000
    },
    {
      id: '3',
      name: 'Luan Santana',
      image: '/artists/luan-santana.jpeg',
      genres: ['Sertanejo', 'Pop'],
      popularity: 96,
      followers: 8800000
    },
    {
      id: '4',
      name: 'Wesley Safadão',
      image: '/artists/wesley-safadao.jpeg',
      genres: ['Forró', 'Sertanejo'],
      popularity: 95,
      followers: 7900000
    },
    {
      id: '5',
      name: 'Zé Neto & Cristiano',
      image: '/artists/ze-neto-cristiano.jpeg',
      genres: ['Sertanejo'],
      popularity: 94,
      followers: 7300000
    },
    {
      id: '6',
      name: 'Jorge & Mateus',
      image: '/artists/jorge-mateus.jpeg',
      genres: ['Sertanejo'],
      popularity: 95,
      followers: 8400000
    },
    {
      id: '7',
      name: 'Simone Mendes',
      image: '/artists/simone-mendes.jpeg',
      genres: ['Sertanejo'],
      popularity: 93,
      followers: 5100000
    },
    {
      id: '8',
      name: 'João Gomes',
      image: '/artists/joao-gomes.jpeg',
      genres: ['Piseiro', 'Forró'],
      popularity: 94,
      followers: 6200000
    },
    {
      id: '9',
      name: 'Ana Castela',
      image: '/artists/ana-castela.jpeg',
      genres: ['Sertanejo'],
      popularity: 96,
      followers: 6800000
    },
    {
      id: '10',
      name: 'Ivete Sangalo',
      image: '/artists/ivete-sangalo.jpeg',
      genres: ['Axé', 'Pop'],
      popularity: 95,
      followers: 7600000
    },
    {
      id: '11',
      name: 'Anitta',
      image: '/artists/anitta.jpeg',
      genres: ['Pop', 'Funk'],
      popularity: 99,
      followers: 20500000
    },
    {
      id: '12',
      name: 'Ludmilla',
      image: '/artists/ludmilla.jpeg',
      genres: ['Funk', 'Pop'],
      popularity: 97,
      followers: 11800000
    },
    {
      id: '13',
      name: 'MC IG',
      image: '/artists/mc-ig.jpeg',
      genres: ['Funk'],
      popularity: 93,
      followers: 5400000
    },
    {
      id: '14',
      name: 'MC Ryan SP',
      image: '/artists/mc-ryan-sp.jpeg',
      genres: ['Funk'],
      popularity: 94,
      followers: 6100000
    },
    {
      id: '15',
      name: 'Roberto Carlos',
      image: '/artists/roberto-carlos.jpeg',
      genres: ['MPB', 'Romântico'],
      popularity: 90,
      followers: 4300000
    },
    {
      id: '16',
      name: 'Marina Sena',
      image: '/artists/marina-sena.jpeg',
      genres: ['Pop', 'MPB'],
      popularity: 91,
      followers: 2900000
    },
    {
      id: '17',
      name: 'Ferrugem',
      image: '/artists/ferrugem.jpeg',
      genres: ['Pagode'],
      popularity: 92,
      followers: 4700000
    },
    {
      id: '18',
      name: 'Alok',
      image: '/artists/alok.jpeg',
      genres: ['Eletrônica'],
      popularity: 98,
      followers: 22500000
    },
    {
      id: '19',
      name: 'Maiara & Maraisa',
      image: '/artists/maiara-maraisa.jpeg',
      genres: ['Sertanejo'],
      popularity: 94,
      followers: 6500000
    },
    {
      id: '20',
      name: 'Pedro Sampaio',
      image: '/artists/pedro-sampaio.jpeg',
      genres: ['Funk', 'Eletrônica', 'Pop'],
      popularity: 96,
      followers: 7200000
    }
  ];

  // Filter by query if provided
  if (query) {
    const lowerQuery = query.toLowerCase();
    return mockData.filter(artist =>
      artist.name.toLowerCase().includes(lowerQuery) ||
      artist.genres.some(genre => genre.toLowerCase().includes(lowerQuery))
    );
  }

  return mockData;
}