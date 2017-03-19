import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectBook } from '../actions';

class BookList extends React.Component {

    renderList() {
        return this.props.books.map(book => (
          <li
            key={book.title}
            className="list-group-item"
            onClick={() => this.props.selectBook(book)}
          >
            {book.title}
          </li>
            ));
    }

    render() {
        return (
          <ul className="list-group col-sm-4">
            {this.renderList()}
          </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.books,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
