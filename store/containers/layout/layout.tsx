import {useAppDispatch, useAppSelector} from '@hooks/use-store';
import {useStorage} from '@hooks/useStorage';
import {rehydrate} from '@redux/card';
import {Product} from '@ts-types/generated';
import NewsletterPopup from "@store/components/newsletter-popup";
import SignInModal from "@store/components/sign-in-modal";
import Footer from "@store/containers/layout/footer/footer";
import Header from "@store/containers/layout/header/header";
import MobileMenu from "@store/containers/layout/menu/mobile-menu";


function Layout ({children,footerContent}: any) {
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();

    const rehydrateLocalState = (items: Product[]) => {
        dispatch(rehydrate(items));
    };

    // This component is global on all pages we are using it to get the items in local storage
    useStorage(items, rehydrateLocalState);
    return (
        <>
            <div className="page-wrapper">
                <Header />

                {children}

                <Footer footerContent={footerContent} />
            </div>
            <button className="scroll-top"><i className="icon-arrow-up"></i></button>
            <div className="mobile-menu-overlay"></div>

            <MobileMenu />

            {/*<SignInModal />*/}

            {/*<NewsletterPopup />*/}
        </>
        )
}
export default Layout;
