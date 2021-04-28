import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../../components/common/Pagination'

const PaginationContainer = props => {
    let totalPage = 100;
    let currentPage = 1;
    return (
        <Pagination totalPage={totalPage} currentPage={currentPage}></Pagination>
    );
};



export default PaginationContainer;