import React from "react";
import style from "./styles/Pagination.module.scss";
import { PaginationProps } from "../interface/interface";

export const Pagination: React.FC<PaginationProps> = ({totalCharacters, charactersPerPage, currentPage, paginate}) => {

    const pageNumbers = [];
    const totalPages = Math.ceil(totalCharacters / charactersPerPage);
    const maxPageToShow = 6;
    const halfMaxPages = Math.floor(maxPageToShow / 2);

    let startPage = currentPage - halfMaxPages;
    let endPage = currentPage + halfMaxPages;

    if (startPage <= 0) {
        startPage = 1;
        endPage = Math.min(maxPageToShow, totalPages);
    }

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxPageToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={style.pageNavContainer}>
            <a 
                className={` ${style.arrow}`} 
                href="#" 
                onClick={() => paginate(Math.max(1, currentPage - 1))}
            >&#129176;</a>
            {
                pageNumbers.map(number => (
                    <a  
                        className={`${style.navLink} ${number === currentPage ? style.active : ""}`} 
                        key={number} 
                        href="#" 
                        onClick={() => paginate(number)}>{number}</a>
                ))
            }
            <a 
                className={` ${style.arrow}`}
                href="#" 
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            >&#129178;</a>
        </nav>
    )
}