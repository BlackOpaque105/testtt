export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    tripsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Milan',
    subtitle: 'Minimal Personal Portfolio',
    description: 'Website built as fun Projcts',
    image: {
        src: '/img/hero.jpeg',
        alt: 'Mailan Poudel'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Trips',
            href: '/trips'
        },
        {
            text: 'Poem',
            href: '/poem'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/mist_meelan'
        },
        {
            text: 'Facebook',
            href: 'https://www.facebook.com/milan.poudel.94402'
        }
    ],
    hero: {
        "title": "Hi There & Welcome to My Corner of the Web!",
        "text": "I'm **Milan Poudel**, a recent high school graduate with a keen interest in tech, literature, and politics. I'm also a curious person who loves exploring different places around Nepal. My passion for technology, love for literature, and fascination with politics drive me to continuously learn and engage in meaningful discussions. Feel free to connect with me to share ideas and stories.",
        image: {
            src: '/img/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Milan Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    tripsPerPage: 8
};

export default siteConfig;
