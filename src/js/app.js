import Alpine from 'alpinejs'
import images from '../img/animals/*.png';

window.Alpine = Alpine;

function missions() {
    return {
        selected: null,
        missionList: [{
                id: 'mission-1',
                shortName: 'Mission 1',
                title: 'Mission 1 | Launch of the collection',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed consequat diam. Nulla non magna ante. Duis lobortis molestie nulla, at suscipit nunc dignissim ut. Sed aliquam purus ante, sagittis lacinia quam accumsan et. Fusce at tristique libero, eu pharetra augue. Etiam in arcu ultricies, rutrum turpis vel, commodo justo. Phasellus aliquam sed libero sed venenatis. Sed varius ligula ut nisi porttitor pellentesque. Donec ac massa velit. Quisque posuere dui ut leo aliquet tristique. Curabitur imperdiet metus nisi, vel auctor ex maximus quis. Nulla vel lectus nisl.'
            },
            {
                id: 'mission-2',
                shortName: 'Mission 2',
                title: 'Mission 2 | Breeding System',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed consequat diam. Nulla non magna ante. Duis lobortis molestie nulla, at suscipit nunc dignissim ut. Sed aliquam purus ante, sagittis lacinia quam accumsan et. Fusce at tristique libero, eu pharetra augue. Etiam in arcu ultricies, rutrum turpis vel, commodo justo. Phasellus aliquam sed libero sed venenatis. Sed varius ligula ut nisi porttitor pellentesque. Donec ac massa velit. Quisque posuere dui ut leo aliquet tristique. Curabitur imperdiet metus nisi, vel auctor ex maximus quis. Nulla vel lectus nisl.'
            },
            {
                id: 'mission-3',
                shortName: 'Mission 3',
                title: 'Mission 3 | Airdrop',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed consequat diam. Nulla non magna ante. Duis lobortis molestie nulla, at suscipit nunc dignissim ut. Sed aliquam purus ante, sagittis lacinia quam accumsan et. Fusce at tristique libero, eu pharetra augue. Etiam in arcu ultricies, rutrum turpis vel, commodo justo. Phasellus aliquam sed libero sed venenatis. Sed varius ligula ut nisi porttitor pellentesque. Donec ac massa velit. Quisque posuere dui ut leo aliquet tristique. Curabitur imperdiet metus nisi, vel auctor ex maximus quis. Nulla vel lectus nisl.'
            },
            {
                id: 'mission-4',
                shortName: 'Mission 4',
                title: 'Mission 4 | DAO CryptoAnimals',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed consequat diam. Nulla non magna ante. Duis lobortis molestie nulla, at suscipit nunc dignissim ut. Sed aliquam purus ante, sagittis lacinia quam accumsan et. Fusce at tristique libero, eu pharetra augue. Etiam in arcu ultricies, rutrum turpis vel, commodo justo. Phasellus aliquam sed libero sed venenatis. Sed varius ligula ut nisi porttitor pellentesque. Donec ac massa velit. Quisque posuere dui ut leo aliquet tristique. Curabitur imperdiet metus nisi, vel auctor ex maximus quis. Nulla vel lectus nisl.'
            },
        ],
    }
}

function mobileMenu() {
    return {
        open: false,
        toggle() {
            this.open = !this.open;
        },
        offset() {
            setTimeout(() => {
                window.scrollTo({
                    top: window.scrollY - 50,
                    behavior: "smooth"
                });
            }, 10);

            this.open = false;
        }
    }
}

function showcaseSlider() {
    return {
        hasVisibleImage: true,
        animals: [
            { name: 'bear', image: images.bear },
            { name: 'cat', image: images.cat },
            { name: 'lama', image: images.lama },
            { name: 'panda', image: images.panda },
            { name: 'penguin', image: images.penguin },
            { name: 'shark', image: images.shark },
            { name: 'turtle', image: images.turtle },
        ],
        current: 0,
        next(cb) { 
            this.hasVisibleImage = false;
            this.current < this.animals.length - 1 
                ? this.current++ 
                : this.current = 0; 
            cb(() => {
                this.hasVisibleImage = true;
            });
        },
        previous(cb) { 
            this.hasVisibleImage = false;
            this.current > 0 
                ? this.current-- 
                : this.current = this.animals.length - 1;
            cb(() => {
                this.hasVisibleImage = true;
            });
        },
    }
}

window.missions = missions;
window.mobileMenu = mobileMenu;
window.showcaseSlider = showcaseSlider;

Alpine.start();