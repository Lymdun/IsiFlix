import { User } from '../models/User';

const UserService = {
  async getUsers(): Promise<User[]> {
    // Mock de la récupération d'une liste d'utilisateur
    const users: User[] = [
      {
        id: 1,
        name: 'Amogus',
        img_path:
          'https://i1.sndcdn.com/artworks-TOJJyHynzM0iRSuW-9URBDA-t500x500.jpg',
      },
      {
        id: 2,
        name: 'Sonic',
        img_path:
          'https://i.jeuxactus.com/datas/divers/c/i/cinema-et-jeux-video/xl/cinema-et-jeux-video-5ccbf5180a831.jpg',
      },
      {
        id: 3,
        name: 'Rick',
        img_path:
          'https://images.radio-canada.ca/q_auto,w_960/v1/ici-info/16x9/rick-astley-videoclip-never-gonna-give-you-up.png',
      },
    ];

    return users;
  },
};

export default UserService;
