import React from 'react';
import { getWordArticle } from '../../lib/api/article';
import Modal from '../../components/common/Modal';
function ArticleModalContainer({keyword, isOpen, changeModal}) {

    // const _getArc = async () => {
    //     const data = await getWordArticle('대구')
    //       .then((res) => console.log(res))
    //       .catch((err) => console.log(err))
    // };

    // _getArc();

    return (
        <Modal keyword={keyword} isOpen={isOpen} changeModal={changeModal}/>
    );
}

export default ArticleModalContainer;