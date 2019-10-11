import React from 'react';
import ReactDOM from 'react-dom';
import {namePrice} from "./lib/json-db";

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        }
    }
    onFilterTextChange = (v) => {
        this.setState({
            filterText: v
        })
    };

    render() {
        return <div>
            <SearchBar onFilterTextChange={this.onFilterTextChange}/>
            <ProductTable filterText={this.state.filterText} products={this.props.products}/>
        </div>
    }
}

class SearchBar extends React.Component {
    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    };

    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." onChange={this.handleFilterTextChange}/>
                <p>
                    <input type="checkbox"/>
                    {' '}
                    Only show products in stock
                </p>
            </form>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        let products = this.props.products;
        let filterText = this.props.filterText;
        console.log(filterText);
        products = products.filter(x =>
            !filterText || x.name.indexOf(filterText) !== -1
        );
        console.log(products);
        let categoryRowMap = new Map();
        products.forEach(v => {
            if (categoryRowMap.get(v.category)) {
                categoryRowMap.get(v.category).push(v);
            } else {
                categoryRowMap.set(v.category, [v]);
            }
        });
        const nextRow = [];
        for (let key of categoryRowMap.keys()) {
            nextRow.push(<ProductCategoryRow key={key} categoryRow={key}/>);
            nextRow.push(<ProductRow key={key+'row'} rows={categoryRowMap.get(key)}/>);
        }
        return (
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
                </thead>
                <tbody>
                {nextRow}
                </tbody>
            </table>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return (<tr key={this.props.categoryRow}>
            <td colSpan='2'>{this.props.categoryRow}</td>
        </tr>)
    }
}

class ProductRow extends React.Component {
    render() {
        return (
            this.props.rows.map(row =>
                <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.price}</td>
                </tr>
            )
        )
    }
}

ReactDOM.render(<FilterableProductTable products={namePrice}/>, document.getElementById('root'));
