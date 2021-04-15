import React from 'react';
import PropTypes from 'prop-types';
import PaginationComponent from '../../components/common/PaginationComponent'

const PaginationContainer = props => {
    let totalPage = 100;
    let currentPage = 1;
    return (
        <PaginationComponent totalPage={totalPage} currentPage={currentPage}></PaginationComponent>
    );
};



export default PaginationContainer;