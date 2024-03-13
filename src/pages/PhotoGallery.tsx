import { useEffect, useState } from "react";
import PhotoCard from "../components/PhotoCard";
import Header from "../components/Header";
import { useTheme } from "../contexts/Theme.context";
import style from "./styles/PhotoGallery.module.scss";
import { Pagination } from "../components/Pagination";
import Footer from "../components/Footer";

function PhotoGallery() {

    const { theme } = useTheme();

    const [photos, setPhotos] = useState<Image[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [photosPerPage] = useState<number>(6);

    interface Image {
        id: string;
        imageName: string;
        imageUrl: string;
    }

    async function fetchPhotos() {
        const response = await fetch("../../images.json");
        if (!response.ok) {
            throw new Error("Faild to fetch data");
        }
        const data: Image[] = await response.json();
        setPhotos(data);
        console.log(photos);
    }

    useEffect(() => {
        fetchPhotos();
        
    }, [])

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return(
        <>
            <Header />
            <main 
                style={{ ...theme as React.CSSProperties }}
                className={style.pageContainer}
            >
                <section className={style.photosContainer}>
                    {
                        currentPhotos.map(photo => (
                            <PhotoCard 
                                key={photo.id}
                                name={photo.imageName}
                                url={photo.imageUrl}
                            />

                        ))
                    }
                </section>
                <Pagination
                    charactersPerPage={photosPerPage}
                    totalCharacters={photos.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </main>
            <Footer />
        </>
    )
}

export default PhotoGallery;