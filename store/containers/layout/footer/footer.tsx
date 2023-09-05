import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Youtube
} from '@store/assets/icons/social-icons';
import Benefits from "@store/containers/layout/footer/benefits";
import FooterNewsletter from "@store/containers/layout/footer/footer-newsletter";
import Copyright from "@store/containers/layout/footer/copyright";
import FooterLinks from "@store/containers/layout/footer/footer-links";

const social = [
    {
        id: 0,
        link: '/',
        icon: <Facebook/>,
        className: 'facebook',
        title: 'facebook'
    },
    {
        id: 1,
        link: '/',
        icon: <Twitter/>,
        className: 'twitter',
        title: 'twitter'
    },
    {
        id: 2,
        link: '/',
        icon: <Youtube/>,
        className: 'youtube',
        title: 'youtube'
    },
    {
        id: 3,
        link: '/',
        icon: <Github/>,
        className: 'github',
        title: 'github'
    },
    {
        id: 4,
        link: '/',
        icon: <Instagram/>,
        className: 'instagram',
        title: 'instagram'
    },
    {
        id: 5,
        link: '/',
        icon: <Linkedin/>,
        className: 'linkedin',
        title: 'linkedin'
    }
];


function Footer({ footerContent }: any) {
    if (!footerContent || footerContent.length === 0) {
        return null; // Eğer footerContent dizisi tanımlı değilse veya boşsa, Footer bileşenini hiçbir şey göstermeyecektir.
    }

    return (
        <>
            <footer className="footer footer-2">
                {footerContent.map((content: React.ReactNode, index: number) => (
                    <div key={index} className="footer-content">
                        {content}
                    </div>
                ))}
            </footer>
        </>
    );
}
export default Footer;

