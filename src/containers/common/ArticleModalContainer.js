import React, {useState, useEffect}from 'react';
import axios from 'axios';
import { getWordArticle } from '../../lib/api/article';
import Modal from '../../components/common/Modal';
import ArticleList from '../../components/common/ArticleList';
function ArticleModalContainer({keyword, isOpen, changeModal}) {
    const [articles, setArticles] = useState([]);

    // useEffect(async () => {
    //     const data = await axios.get('/api', {
    //         params: {
    //             query: "검색",
    //             display: 10
    //         },
    //         headers: {
    //             'X-Naver-Client-Id': "5gDWdEm4JXL_4OLm1fhn",
    //             'X-Naver-Client-Secret' : "WWb8Zv_AeM"
    //         }
    //     })
    //       .then((res) => console.log(res))
    //       .catch((err) => console.log(err))
    // }, [keyword])

    useEffect(() => {
        setArticles([
            {title: "기사제목1", url : "/", date : "2021-04-24"},
            {title: "기사제목2", url : "/", date : "2021-04-24"},
            {title: "기사제목3", url : "/", date : "2021-04-24"},
            {title: "기사제목4", url : "/", date : "2021-04-24"},
            {title: "기사제목5", url : "/", date : "2021-04-24"},
            {title: "기사제목6", url : "/", date : "2021-04-24"},
            {title: "기사제목7", url : "/", date : "2021-04-24"},
            {title: "기사제목8", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
            {title: "기사제목9", url : "/", date : "2021-04-24"},
        ]);
    }, [])

    

    return (
        <Modal isOpen={isOpen} changeModal={changeModal}>
            <ArticleList keyword={keyword} articles={articles}> </ArticleList>
        </Modal>
    );
}

export default ArticleModalContainer;